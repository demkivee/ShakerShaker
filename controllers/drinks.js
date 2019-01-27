var express = require('express');
var router = express.Router();

const drinks = require('../repositories/drinks')

router.get('/', drinks.getDrink)
router.get('/:id', drinks.getDrinkById)
router.post('/', drinks.createDrink)
router.put('/:id', drinks.updateDrink)
router.delete('/:id', drinks.deleteDrink)

module.exports = router;