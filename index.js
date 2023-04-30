const express = require('express')
const bodyParser = require('body-parser')
var verifier = require('email-verify');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html")

})


app.post('/validateemail', async (req, res) => {

    let email = req.body.email

    verifier.verify(email, function (err, info) {

        res.json({
            email: email,
            message: info.success
        })

    })
})

app.listen(5000, () => {
    console.log("App is listening on port 5000")
})