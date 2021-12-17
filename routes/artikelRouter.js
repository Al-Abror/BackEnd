const router = require('express').Router()
const { ArtikelController, AuthController } = require('../Controllers')

router.get('/artikel', AuthController.authenticationJWT, ArtikelController.getArtikel)
router.post('/admin/artikel', AuthController.authenticationJWT, ArtikelController.postArtikel)
router.get('/artikel/:id', AuthController.authenticationJWT, ArtikelController.getArtikelById)
router.patch('/admin/artikel/:id', AuthController.authenticationJWT, ArtikelController.updateArtikel)
router.delete('/admin/artikel/:id', AuthController.authenticationJWT, ArtikelController.deleteArtikel)

module.exports = router