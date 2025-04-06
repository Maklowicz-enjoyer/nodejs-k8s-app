const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

if (require.main === module) {
  app.listen(3000, () => console.log('Server running'));
}

module.exports = app; // <-- export for testing
