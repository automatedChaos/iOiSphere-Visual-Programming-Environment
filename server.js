var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
const PORT = process.env.PORT || 5000

app.use(express.static('root'))

app.listen(PORT, () => console.log('Example app listening on port 3000!'))
