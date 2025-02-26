const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Forward requests to SDK
app.post('/api/sdk/:command', async (req, res) => {
  try {
    const sdkUrl = `http://${process.env.SDK_HOST}:${process.env.SDK_PORT}/${req.params.command}`;
    const response = await axios.post(sdkUrl, req.body);
    res.json(response.data);
  } catch (error) {
    console.error('SDK request failed:', error.message);
    res.status(500).json({ error: 'Failed to communicate with SDK' });
  }
});

app.listen(port, () => {
  console.log(`Middleware API running on port ${port}`);
});
