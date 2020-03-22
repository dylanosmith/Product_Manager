const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/productdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the product database"))
    .catch(err => console.log("something went wrong while connecting to the database", err));