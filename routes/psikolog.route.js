const router = require('express').Router()
const { PsikologController, AuthController } = require('../Controllers')

router.patch('/edit-psikolog/:id', AuthController.authenticationJWT, PsikologController.updatePsikolog)
router.delete('/delete-psikolog/:id', AuthController.authenticationJWT, PsikologController.deletePsikolog)
router.post('/add-psikolog',  AuthController.authenticationJWT, PsikologController.postPsikolog)
router.get('/:id', PsikologController.getPsikologById)
router.get('/', PsikologController.getPsikolog)

module.exports = router