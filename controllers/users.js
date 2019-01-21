var express = require('express');
var router = express.Router();

const user = require('../repositories/users')

router.get('/', user.getUsers)
router.get('/:id', user.getUserById)
router.post('/', user.createUser)
router.put('/:id', user.updateUser)
router.delete('/:id', user.deleteUser)

module.exports = router;