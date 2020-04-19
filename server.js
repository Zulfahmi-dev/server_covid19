const db = require('./config/db');
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const router = require("./routes");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

router(app);

app.get('/', async (req, res) => {
    try {
        const data = await db.query('Select * from tbl_identitas');

        res.send(data)    
    } catch (error) {
        res.send(error)
    }
    
});
// production
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

// development
// var http = require('http').Server(app);
// http.listen(PORT, process.argv[2])