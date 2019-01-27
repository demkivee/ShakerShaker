var express = require('express');
var router = express.Router();

const drinksIngredients = require('../repositories/drinksIngredients')

router.get('/', drinksIngredients.getDrinkIngredient)
router.get('/:drink_id&:ingredient_id', drinksIngredients.getDrinkIngredientById)
router.post('/', drinksIngredients.createDrinkIngredient)
// Not sure if many-to-many needs update
// router.put('/:id', drinksIngredients.updateDrinkIngredient)
router.delete('/:drink_id&:ingredient_id', drinksIngredients.deleteDrinkIngredient)

module.exports = router;