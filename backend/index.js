const express = require('express');
const cors = require('cors');
const account_database = require("./database/account")
const contact_database = require("./database/contact")

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(account_database)
app.use(contact_database)




app.listen(8000, () => {
    console.log("BE started at port 8000")
})