var express = require('express');
var router = express.Router();

const drinkType = require('../repositories/drinkType')

router.get('/', drinkType.getDrinkTypes)
router.get('/:id', drinkType.getDrinkTypeById)
router.post('/', drinkType.createDrinkType)
router.put('/:id', drinkType.updateDrinkType)
router.delete('/:id', drinkType.deleteDrinkType)

module.exports = router;