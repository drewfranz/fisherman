const express = require("express")
const bodyParser = require("body-parser")
const res = require("express/lib/response")

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.post("/hook", (req, res) => {
    console.log(req.body)
    res.status(200).end()
})

app.get("/status", (req, res) => {
    console.log(req.body);
    res.send("OK")
})

app.listen(PORT, 'localhost', () => {
    console.log(`Express server started on port ${PORT}`)
})