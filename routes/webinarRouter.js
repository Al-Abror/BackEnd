const router = require('express').Router()
const { WebinarController, AuthController } = require('../Controllers')

router.get('/webinar', AuthController.authenticationJWT, WebinarController.getWebinar)
router.post('/admin/webinar', AuthController.authenticationJWT, WebinarController.postWebinar)
router.get('/webinar/:id', AuthController.authenticationJWT, WebinarController.getWebinarById)
router.patch('/admin/webinar/:id', AuthController.authenticationJWT, WebinarController.updateWebinar)
router.delete('/admin/webinar/:id', AuthController.authenticationJWT, WebinarController.deleteWebinar)

module.exports = router