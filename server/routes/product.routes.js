const ProductController = require("../controllers/product.controller");

module.exports = function(app){
    app.post("/api/products/new", ProductController.CreateProduct);
    app.put("/api/products/update/:id", ProductController.UpdateProduct);
    app.delete("/api/products/delete/:id", ProductController.DeleteProduct);
    app.get("/api/products/", ProductController.FindAllProducts);
    app.get("/api/products/:id", ProductController.FindOneProduct)
}