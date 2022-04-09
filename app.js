const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Emmanuel, you\'re welcome to your new dev-ops aws carrier role!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
