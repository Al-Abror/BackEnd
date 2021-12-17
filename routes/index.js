const router = require('express').Router()
const artikelRouter = require('./artikelRouter')
const webinarRouter = require('./webinarRouter')
const userRouter = require('./userRouter')

router.use(artikelRouter)
router.use(webinarRouter)
router.use(userRouter)

module.exports = router