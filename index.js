// import module
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')

// inisialisasi server
const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(router)
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
