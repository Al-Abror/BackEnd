const router = require('express').Router()
const { UserController, AdminController, AuthController } = require('../Controllers')

// login
router.post('/login', AuthController.loginUser)

// admin
router.get('/listusers', AuthController.authenticationJWT, AdminController.getUsers)
router.post('/addusers', AuthController.authenticationJWT, AdminController.addUser)
router.get('/users/:id', AuthController.authenticationJWT, AdminController.getUserById)
router.patch('/users/:id', AuthController.authenticationJWT, AdminController.updateUser)
router.delete('/users/:id', AuthController.authenticationJWT, AdminController.deleteUser)

// user
router.post('/register', AuthController.authenticationJWT, UserController.registerUser)
router.patch('/update-user/:id', AuthController.authenticationJWT, UserController.updateUser)

module.exports = router