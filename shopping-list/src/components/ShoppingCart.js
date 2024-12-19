import React from 'react';

const ShoppingCart = ({ products, removeProduct }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.quantity} x {product.name}
                        <button onClick={() => removeProduct(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;