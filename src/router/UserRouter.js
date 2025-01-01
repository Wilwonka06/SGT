const express = require('express');
const { auth, isAdmin } = require('../middleware/LoginMiddleware');

const { createUser, updateUser, getUserById, getAllUsers, getUserByDocument} = require('../controller/UserController')
const { registerUserValidation, updateUserValidation, getUserByIdValidation, } = require('../middleware/UserMiddleware');

const router = express.Router();

router.post('/', registerUserValidation, createUser);
router.get('/', auth, getUserByIdValidation, getAllUsers);
router.get('/:document', auth, isAdmin, getUserByIdValidation, getUserByDocument);
router.put('/:id', auth, isAdmin, updateUserValidation, updateUser);
router.patch('/:id/status', auth, isAdmin, updateUserValidation, updateUser);

module.exports = router