var router = require('express').Router();
const https = require('https');

router.use('/api/drinks', require('../controllers/drinks'));

router.use('/api/drinksIngredients', require('../controllers/drinksIngredients'));

router.use('/api/drinkType', require('../controllers/drinkType'));

router.use('/api/ingredients', require('../controllers/ingredients'));

router.use('/api/reviewMarks', require('../controllers/reviewMarks'));

router.use('/api/reviews', require('../controllers/reviews'));

router.use('/api/users', require('../controllers/users'));


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/drinks', require('../controllers/drinks'));

router.use('/drinksIngredients', require('../controllers/drinksIngredients'));

router.use('/drinkType', require('../controllers/drinkType'));

router.use('/ingredients', require('../controllers/ingredients'));

router.use('/reviewMarks', require('../controllers/reviewMarks'));

router.use('/reviews', require('../controllers/reviews'));

router.use('/users', require('../controllers/users'));


module.exports = router;
