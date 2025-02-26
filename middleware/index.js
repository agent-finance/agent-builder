const express = require('express');
const cors = require('cors');
const axios = require('axios');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3001;

// Security middleware
app.use(helmet()); // Set security headers
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000'
    : '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api/', apiLimiter);

// Logging
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Request parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const apiRoutes = express.Router();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'middleware-api'
  });
});

// Validate SDK command
const validateSdkCommand = (req, res, next) => {
  const { command } = req.params;
  const allowedCommands = ['execute', 'status', 'list'];
  
  if (!command || !allowedCommands.includes(command)) {
    return res.status(400).json({ 
      error: 'Invalid command',
      message: `Command must be one of: ${allowedCommands.join(', ')}`
    });
  }
  
  next();
};

// Forward requests to SDK
apiRoutes.post('/sdk/:command', validateSdkCommand, async (req, res) => {
  try {
    const sdkHost = process.env.SDK_HOST || 'sdk';
    const sdkPort = process.env.SDK_PORT || 3002;
    const sdkUrl = `http://${sdkHost}:${sdkPort}/${req.params.command}`;
    
    console.log(`Forwarding request to SDK: ${sdkUrl}`);
    
    const response = await axios.post(sdkUrl, req.body, {
      timeout: 10000, // 10 second timeout
      headers: {
        'Content-Type': 'application/json',
        'X-Request-ID': req.headers['x-request-id'] || Date.now().toString()
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('SDK request failed:', error.message);
    
    // Handle different types of errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return res.status(error.response.status).json({
        error: 'SDK service error',
        message: error.response.data.message || 'Error from SDK service',
        status: error.response.status
      });
    } else if (error.request) {
      // The request was made but no response was received
      return res.status(503).json({
        error: 'SDK service unavailable',
        message: 'Failed to receive response from SDK service'
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      return res.status(500).json({
        error: 'Internal server error',
        message: 'Failed to communicate with SDK service'
      });
    }
  }
});

// Mount API routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.url} not found`
  });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' 
      ? 'An unexpected error occurred' 
      : err.message
  });
});

// Start server
app.listen(port, () => {
  console.log(`Middleware API running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
});
