const router = require('express').Router()
const artikelRouter = require('./artikelRouter')

router.use(artikelRouter)

module.exports = router