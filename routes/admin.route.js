const router = require('express').Router()
const { AdminController, AuthController } = require('../Controllers')

router.post('/add-users', AuthController.authenticationJWT, AdminController.addUser)
router.get('/list-users', AuthController.authenticationJWT, AdminController.getUsers)
router.get('/users/:id', AuthController.authenticationJWT, AdminController.getUserById)
router.patch('/users/:id', AuthController.authenticationJWT, AdminController.updateUser)
router.delete('/users/:id', AuthController.authenticationJWT, AdminController.deleteUser)

module.exports = router