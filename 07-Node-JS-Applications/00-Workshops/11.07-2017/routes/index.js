const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('home', { title: 'Express' });
});

router.get('/courses', function(req, res) {
  res.render('courses', { title: 'Express' });
});

module.exports = router;