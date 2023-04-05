//working off of Express.js's "Getting Started" docs -- https://expressjs.com/en/starter/hello-world.html
const express = require('express') 
const app = express()
const port = 3000 //port to listen on for connections

app.get('/', (req, res) => { //handles get requests, returns json object
    res.json({
        "message": "My name is Mikayla Billings-Alston",
        "timestamp":  Date.now() //timestamp in milliseconds
    })
})

app.listen(port, () => { //listening on specified port
    console.log(`Listening on port ${port}`)
})