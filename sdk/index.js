const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Example SDK endpoint
app.post('/execute', (req, res) => {
  const { command } = req.body;
  // TODO: Implement actual SDK command execution
  res.json({ 
    status: 'success',
    message: `Executed command: ${command}`,
    result: {} 
  });
});

app.listen(port, () => {
  console.log(`SDK service running on port ${port}`);
});
