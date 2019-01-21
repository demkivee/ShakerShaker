var express = require('express');
var router = express.Router();

router.use('/drinktype', require('./drinkType'));
router.use('/drinks', require('./drinks'));
router.use('/drinksingredients', require('./drinksingredients'));
router.use('/ingredients', require('./ingredients'));
router.use('/reviewmarks', require('./reviewmarks'));
router.use('/reviews', require('./reviews'));
router.use('/users', require('./users'));

module.exports = router;