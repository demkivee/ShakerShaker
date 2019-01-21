var express = require('express');
var router = express.Router();

const ingredient = require('../repositories/ingredients')

router.get('/', ingredient.getIngredients)
router.get('/:id', ingredient.getIngredientById)
router.post('/', ingredient.createIngredient)
router.put('/:id', ingredient.updateIngredient)
router.delete('/:id', ingredient.deleteIngredient)

module.exports = router;