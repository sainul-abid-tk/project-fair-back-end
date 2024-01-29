const express = require('express')
const router = express.Router()
const userController=require('../Controllers/userController')
// Route for register
router.post('/register',userController.register)
// Route for login
router.post('/login',userController.login)

module.exports = router