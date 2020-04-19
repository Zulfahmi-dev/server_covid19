require('dotenv').config();
const express = require("express");
const cors = require("cors");
const router = require("./routes");


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.send({hai:"hello"})
})
router(app);

// production
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

// development
// var http = require('http').Server(app);
// http.listen(PORT, process.argv[2])