var express = require('express');
var router = express.Router();

const drinks = require('../repositories/drinks')

router.get('/', drinks.getDrinkss)
router.get('/:id', drinks.getDrinksById)
router.post('/', drinks.createDrinks)
router.put('/:id', drinks.updateDrinks)
router.delete('/:id', drinks.deleteDrinks)

module.exports = router;