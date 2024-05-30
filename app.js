const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const mainController = require('./controllers/mainController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', mainController.getHomePage);
app.get('/about', mainController.getAboutPage);
app.get('/contact', mainController.getContactPage);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});