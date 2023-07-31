import React, { useState } from 'react';
import ProductList from './ProductList';

function ParentComp() {
    const products = [
        {
            id: 1,
            name: 'Telephone',
            category: 'Electronics',
            price: 1500,
        },
        {
            id: 2,
            name: 'Shirt',
            category: 'Clothes',
            price: 120,
        },
        {
            id: 3,
            name: 'Notebook',
            category: 'Electronics',
            price: 20000,
        },
        {
            id: 4,
            name: 'Book',
            category: 'Book',
            price: 15,
        },
    ];

    const [category, setCategory] = useState('');
    const [sortProducts, setSortProducts] = useState('');

    return (
        <div>
            <h1>Categories</h1>
            <div>
                <label>
                    Category: 
                    <select value={category} onChange={(e) => setCategory(e.target.value)}> 
                        <option value="">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Book">Book</option>
                    </select>
                </label>
                <label>
                    Sort:
                    <select value={sortProducts} onChange={(e) => setSortProducts(e.target.value)}>
                        <option value="">Без сортировки</option>
                        <option value="asc">По возрастанию цены</option>
                        <option value="desc">По убыванию цены</option>
                    </select>
                </label>
            </div>
            <ProductList products={products} category={category} sortProducts={sortProducts} />
        </div>
    )
}

export default ParentComp;