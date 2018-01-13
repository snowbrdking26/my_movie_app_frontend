const express = require('express');
const app = express();
const PORT = 3001 || process.env.PORT;
app.listen(PORT, console.log('My Movies App on PORT:', PORT));

// ==============
// MIDDLEWARE
// ==============

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('public'));

// ==============
// ROUTES
// ==============

app.get('/movies', (req, res) => {
  res.render("index.html");
});
