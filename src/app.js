const express = require('express')
const path = require('path')
const app = express()

const publicDir = path.join(__dirname,"../public")

app.use(express.static(publicDir))

app.get('/', (req,res) => {
    res.render('index')
})

port = process.env.PORT || 3000

app.listen(port , () => {
    console.log(`Server running on port ${port}....`)
})