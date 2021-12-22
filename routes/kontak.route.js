const router = require('express').Router()
const { KontakController, AuthController } = require('../Controllers')

// user only
router.post('/send-message', AuthController.authenticationJWT, KontakController.postMessage)

// admin only
router.get('/:id', AuthController.authenticationJWT, KontakController.getMessageById)
router.get('/', AuthController.authenticationJWT, KontakController.getMessage)

module.exports = router