import React, { useMemo } from 'react';

function ProductList({products, category, sortProducts}) {
    const filteredProducts = useMemo(() => {
        if (category !== '') {
            return products.filter((product) => product.category === category);
        }
        return products;
    }, [products, category]);
    
    console.log(filteredProducts);

    const sortedProducts = useMemo(() => {
        if (sortProducts === 'asc') {
            return [...filteredProducts].sort((a, b) => a.price - b.price);
        }
        if (sortProducts === 'desc') {
            return [...filteredProducts].sort((a, b) => b.price - a.price);
        }
        return filteredProducts;
    }, [products, sortProducts]);

    return (
        <div>
            <h2>Products list</h2>
            <ul>
                {
                    sortedProducts.map(product => (
                        <li key={product.id}>
                            {product.name} - {product.price} ({product.category});
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductList;