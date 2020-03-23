import React from 'react'
import axios from "axios";

const ProductDetail = ({id}) => {
    const [product, setProduct] = React.useState({});

    React.useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct({
                ...res.data
            }))
            .catch(err => console.log(err))
    },[])
    return (
        <div>
            <h3> {product.title} </h3>
            <p> ${product.price} </p>
            <p> {product.description} </p>
            
        </div>
    )
}

export default ProductDetail
