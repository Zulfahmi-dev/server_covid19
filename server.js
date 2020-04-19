const db = require('../../../config/db');
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const router = require("./routes");


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

router(app);

app.get('/', (req, res) => {
    const data = await db.query('Select * from tbl_identitas');

    res.send(data)
});
// production
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

// development
// var http = require('http').Server(app);
// http.listen(PORT, process.argv[2])