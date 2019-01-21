var express = require('express');
var router = express.Router();

const drinksIngredients = require('../repositories/drinksIngredients')

router.get('/', drinksIngredients.getDrinksIngredientss)
router.get('/:id', drinksIngredients.getDrinksIngredientsById)
router.post('/', drinksIngredients.createDrinksIngredients)
router.put('/:id', drinksIngredients.updateDrinksIngredients)
router.delete('/:id', drinksIngredients.deleteDrinksIngredients)

module.exports = router;