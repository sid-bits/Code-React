import React, { useState } from 'react';
import InputContainer from './InputContainer';
import ShoppingCart from './ShoppingCart';

const MainContainer = () => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const removeProduct = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    return (
        <div>
            <InputContainer addProduct={addProduct} />
            <ShoppingCart products={products} removeProduct={removeProduct} />
        </div>
    );
};

export default MainContainer;