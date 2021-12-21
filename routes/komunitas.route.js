const router = require('express').Router()
const { KomunitasController, AuthController } = require('../Controllers')

router.patch('/edit-komunitas/:id', AuthController.authenticationJWT, KomunitasController.updateKomunitas)
router.delete('/delete-komunitas/:id', AuthController.authenticationJWT, KomunitasController.deleteKomunitas)
router.post('/add-komunitas',  AuthController.authenticationJWT, KomunitasController.postKomunitas)
router.get('/:id', KomunitasController.getKomunitasById)
router.get('/', KomunitasController.getKomunitas)

module.exports = router