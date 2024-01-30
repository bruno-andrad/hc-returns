const express = require('express')
const app = express()
const router = express.Router()

router.get('/health200', (req, res) => {
    res.status(200).json({ msg: 'App running' })
})

router.get('/health503', (req, res) => {
    res.status(503).json({ msg: 'App Error 503' })
})

router.get('/health400', (req, res) => {
    res.status(400).json({ msg: 'App Error 400' })
})

app.use(router)

app.listen(3000, () =>{
    console.log('App running')
})