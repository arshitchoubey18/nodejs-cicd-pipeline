const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from CI/CD demo!', 
    version: process.env.APP_VERSION || 'dev',
    time: new Date().toISOString()
  });
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
