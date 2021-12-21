const router = require('express').Router()
const { WebinarController, AuthController } = require('../Controllers')

router.delete('/delete-webinar/:id', AuthController.authenticationJWT, WebinarController.deleteWebinar)
router.patch('/edit-webinar/:id', AuthController.authenticationJWT, WebinarController.updateWebinar)
router.post('/add-webinar', AuthController.authenticationJWT, WebinarController.postWebinar)
router.get('/:id', WebinarController.getWebinarById)
router.get('/', WebinarController.getWebinar)

module.exports = router