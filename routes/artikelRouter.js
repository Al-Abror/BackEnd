const router = require('express').Router()
const { ArtikelController, AuthController } = require('../Controllers')

router.get('/artikel', AuthController, ArtikelController.getArtikel)
router.post('/artikel', AuthController, ArtikelController.postArtikel)
router.get('/artikel/:id', AuthController, ArtikelController.getArtikelById)
router.update('/artikel/:id', AuthController, ArtikelController.updateArtikel)
router.delete('/artikel/:id', AuthController, ArtikelController.deleteArtikel)

module.exports = router