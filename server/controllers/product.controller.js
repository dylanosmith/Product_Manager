const Product = require("../models/product.model")

module.exports.CreateProduct = (request, response) => {
    console.log("logging the request body in CreateProduct function",request.body);
    Product.create(request.body)
        .then(newProduct => response.json(newProduct))
        .catch(err => response.status(500).json(err));
};

module.exports.FindAllProducts = (request, response) => {
    Product.find()
        .then(allProducts => response.json(allProducts))
        .catch(err => response.status(500).json(err));
};

module.exports.FindOneProduct = (request, response) => {
    console.log("logging request.params.id in findOne function", request.body);
    Product.findOne({_id: request.params.id})
        .then(product => response.json(product))
        .catch(err => response.status(500).json(err));
};

module.exports.DeleteProduct = (request, response) => {
    console.log("logging request.params.id in Delete function", request.body);
    Product.deleteOne({_id: request.params.id})
        .then(deleted => response.json(deleted))
        .catch(err => response.status(500).json(err));
};

module.exports.UpdateProduct = (request, response) => {
    console.log("logging request.params.id in Update function", request.body);
    Product.updateOne({_id:request.params.id}, request.body)
        .then(confirmation => response.json(confirmation))
        .catch(err => response.status(500).json(err))

}