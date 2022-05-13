#!/usr/bin/env node

const express = require("express")
const bodyParser = require("body-parser")
const res = require("express/lib/response")

const exec = require('child_process').exec;

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.post("/hook", (req, res) => {
    const myShellScript = exec("/var/www/seewhatiwilldo.com/dev/build.sh");
    console.log(req.body)

    myShellScript.stdout.on('data', (data)=>{
        console.log(data);
        // do whatever you want here with data
    });
    myShellScript.stderr.on('data', (data)=>{
        console.error(data);
    });

    res.send("OK")
    res.status(200).end()
})

app.get("/status", (req, res) => {
    console.log(req.body);
})

app.listen(PORT, 'localhost', () => {
    console.log(`Express server started on port ${PORT}`)
})

