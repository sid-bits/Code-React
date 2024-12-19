import React, { useState } from 'react';

const InputContainer = ({ addProduct }) => {
    const [quantity, setQuantity] = useState(1);
    const [productName, setProductName] = useState('');

    const handleAddProduct = () => {
        if (productName.trim()) {
            addProduct({ name: productName, quantity });
            setProductName('');
        }
    };

    return (
        <div>
            <h2>Input Container</h2>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input
                type="text"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <button onClick={handleAddProduct}>Add</button>
        </div>
    );
};

export default InputContainer;