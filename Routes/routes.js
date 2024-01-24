const express = require('express')
const router = express.Router()
const userController=require('../Controllers/userController')
// Route for register
router.post('/register',userController.register)
module.exports = router