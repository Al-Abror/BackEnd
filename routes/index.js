const router = require('express').Router()
const artikelRouter = require('./artikel.route')
const webinarRouter = require('./webinar.route')
const userRouter = require('./user.route')
const kontakRouter = require('./kontak.route')
const psikologRouter = require('./psikolog.route')
const adminRouter = require('./admin.route')

router.get("/ping", (req, res) => {
    const ready = {
        status: "server is ready"
    }
    res.status(200).send(ready)
})

router.use('/artikel', artikelRouter)
router.use('/webinar', webinarRouter)
router.use('/message', kontakRouter)
router.use('/psikolog', psikologRouter)
router.use(adminRouter)
router.use(userRouter)

module.exports = router