var express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Defining port for server
var port = process.env.PORT || 3001

// parser request of content type  - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors())

//parse request of content-type json
app.use(bodyParser.json())

//Test API 
app.get('/', (req, res)=>{
    res.json({ "message" : "Welcome to A2Z Resources backend"})
})

// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port: " + port)
})
