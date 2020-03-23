import React from 'react'
import {Link} from "@reach/router";

const ProductList = ({products}) => {
    return (
        <div>
            <h1>List of Current Products</h1>
            {products.map(product => (
            <p key={product._id}>
                <Link to={`/product/${product._id}`}>{product.title}</Link>
            </p>
            ))}
            
        </div>
    )
}

export default ProductList
