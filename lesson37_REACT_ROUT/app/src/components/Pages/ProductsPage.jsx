import React from 'react'
import { Link } from 'react-router-dom';

function ProductsPage() {
  const products = [
    {
      id: '1',
      name: 'Prod1',
      descritpion: 'Lorem 1',
      price: '99.99',
      image: 'https://via.placeholder.com/150?text=Product+1',
    },
    {
      id: '2',
      name: 'Prod2',
      descritpion: 'Lorem 2',
      price: '199.99',
      image: 'https://via.placeholder.com/150?text=Product+2',
    },
    {
      id: '3',
      name: 'Prod3',
      descritpion: 'Lorem 3',
      price: '299.99',
      image: 'https://via.placeholder.com/150?text=Product+3',
    },
  ];
  return (
    <div>
      <h1>Our Product</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <Link to={`${product.id}`}>View more</Link>
        </div>
      ))}
    </div>
  )
}

export default ProductsPage