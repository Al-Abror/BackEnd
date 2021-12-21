const router = require('express').Router()
const { KontakController, AuthController } = require('../Controllers')

router.get('/', AuthController.authenticationJWT, KontakController.getMessage)
router.post('/send-message', AuthController.authenticationJWT, KontakController.postMessage)
router.get('/:id', KontakController.getMessageById)

module.exports = router