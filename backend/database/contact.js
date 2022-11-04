const express = require('express');
const mongoose = require('mongoose');
const database = express()

mongoose.connect('mongodb://localhost:27017/registerId', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected");
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    reason: String,
})

const User = new mongoose.model("Contact", userSchema)

database.post("/contact", (req, res) => {
    const { name, email, reason } = req.body

    const user = new User({
        name,
        email,
        reason
    })
    user.save(err => {
        if (err) {
            res.send(err)
        } else {
            res.send({ message: "Successfully Sent" })
        }
    })

})

module.exports = database