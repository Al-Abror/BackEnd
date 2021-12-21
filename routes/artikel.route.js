const router = require('express').Router()
const { ArtikelController, AuthController } = require('../Controllers')

router.patch('/edit-artikel/:id', AuthController.authenticationJWT, ArtikelController.updateArtikel)
router.delete('/delete-artikel/:id', AuthController.authenticationJWT, ArtikelController.deleteArtikel)
router.post('/add-artikel',  AuthController.authenticationJWT, ArtikelController.postArtikel)
router.get('/:id', ArtikelController.getArtikelById)
router.get('/', ArtikelController.getArtikel)

module.exports = router