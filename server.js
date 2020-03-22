const express = require("express")
const cors = require('cors')
const app = express();

//require mongoose config file to run on startup
require("./server/config/mongoose.config");

//cors
app.use(cors())

//express using statements
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes go here
require("./server/routes/product.routes")(app)

//starting server on port 8000
app.listen(8000, () => {
    console.log("listening on port 8000");
})