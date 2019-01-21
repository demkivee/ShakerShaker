var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/drinks', function(req, res, next) {
  res.render('tableView', { title: 'drinks' });
});

router.get('/drinksIngredients', function(req, res, next) {
  res.render('tableView', { title: 'drinksIngredients' });
});

router.get('/drinkType', function(req, res, next) {
  res.render('tableView', { title: 'drinkType' });
});

router.get('/ingredients', function(req, res, next) {
  res.render('tableView', { title: 'ingredients' });
});

router.get('/reviewMarks', function(req, res, next) {
  res.render('tableView', { title: 'reviewMarks' });
});

router.get('/reviews', function(req, res, next) {
  res.render('tableView', { title: 'reviews' });
});

router.get('/users', function(req, res, next) {
  res.render('tableView', { title: 'users' });
});

module.exports = router;
