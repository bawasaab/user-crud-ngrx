const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.post('/', userController.insertUser)
router.put('/:id', userController.updateUser)
router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
router.delete('/:id', userController.deleteUser)

module.exports = router;
