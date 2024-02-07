const express = require('express')
const router = express.Router()
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const multerConfig = require('../Middleware/multerMiddleware')
// Route for register
router.post('/register',userController.register)
// Route for login
router.post('/login',userController.login)
// Add projetcs
router.post('/addproject',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)
// Get home projects
router.get('/homeprojects',projectController.getHomeProjects)
// Get all projects
router.get('/allprojects',jwtMiddleware,projectController.getAllProjects)
// Get user projects
router.get('/userprojects',jwtMiddleware,projectController.getUserProjects)

module.exports = router