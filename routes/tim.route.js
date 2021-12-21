const router = require('express').Router()
const { TimController, AuthController } = require('../Controllers')

router.patch('/edit-tim/:id', AuthController.authenticationJWT, TimController.updateTim)
router.delete('/delete-tim/:id', AuthController.authenticationJWT, TimController.deleteTim)
router.post('/add-tim',  AuthController.authenticationJWT, TimController.postTim)
router.get('/:id', TimController.getTimById)
router.get('/', TimController.getTim)

module.exports = router