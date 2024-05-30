exports.getHomePage = (req, res) => {
  res.render('home', { title: 'Home Page' });
};

exports.getAboutPage = (req, res) => {
  res.render('about', { title: 'About Page' });
};

exports.getContactPage = (req, res) => {
  res.render('contact', { title: 'Contact Page' });
};