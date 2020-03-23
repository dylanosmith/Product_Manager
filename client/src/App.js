import React from 'react';
import './App.css';
import {Router} from "@reach/router";
import ProductForm from "./components/ProductForm"
import ProductDetail from "./components/ProductDetail"


function App() {
  return (
    <div className="App">
      <Router>
        <ProductForm path = "/" />
        <ProductDetail path = "/product/:id"/>
      </Router>
    </div>
  );
}

export default App;
