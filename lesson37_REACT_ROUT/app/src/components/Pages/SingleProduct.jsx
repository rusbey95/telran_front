import React, {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function SingleProduct() {
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
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((product) => product.id === id);
    useEffect(() => {
        if (!product) {
            navigate("/not-found");
        }
    }, [product, navigate]);

    if (!product) {
        return null;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt="Product image" />
            <p>{product.descritpion}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default SingleProduct