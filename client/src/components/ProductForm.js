import React from 'react'
import axios from "axios";
import ProductList from "./ProductList"

export default function ProductForm() {
    const initialFormState = {
        title: "",
        price: 0.00,
        description: ""
    }
    const [products, setProducts] = React.useState([])

    React.useEffect (() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => {
                console.log("something went wrong in ProdctList.js", err);
            });
    },[]);

    const [form, setForm] = React.useState(initialFormState)

    const onSubmitHandler = e => {
        console.log("Logging the submit event", e);
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", form)
            .then(newProduct => {
                console.log(newProduct);
                setForm({
                    ...initialFormState,
                    submitted: true
                })
            }) 
            .catch(error => console.log("Something went wrong at your axios call in ProductForm",
            error))
        
    }

    const onChangeHandler = e => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <h1>Add a New Product</h1>
            {form.submitted && <span style={{color: "green"}}>"Thank you for adding your product!</span>}
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" value = {form.title} onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input type="text" name="price" value = {form.price} onChange={onChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" name="description" value = {form.description} onChange={onChangeHandler} />
                </div>
                <button className="btn-submit" type="submit">Add Product</button>
            </form>
            <hr/>
            <ProductList products={products}/>
        </div>
    )
}