const router = require('express').Router()
const { TestimoniController, AuthController } = require('../Controllers')

// admin only
router.patch('/edit-testimoni/:id', AuthController.authenticationJWT, TestimoniController.updateTestimoni)
router.delete('/delete-testimoni/:id', AuthController.authenticationJWT, TestimoniController.deleteTestimoni)
router.post('/add-testimoni',  AuthController.authenticationJWT, TestimoniController.postTestimoni)

// admin, user, and non user
router.get('/:id', TestimoniController.getTestimoniById)
router.get('/', TestimoniController.getTestimoni)

module.exports = router