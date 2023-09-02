import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import ProductsItem from '../products/ProductsItem';
import { categoriesAction } from '../../store/actions/getCategoriesAction';


function Category() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoriesAction());
    });

    const products = useSelector((state) => state.product.products);
    const categories = useSelector((state) => state.category.categories);
    
    const {id} = useParams();

    const productRes = products.filter(product => product.categoryId === Number(id));

    const category = categories.find(category => category.id === Number(id));

    const [sortProducts, setSortProducts] = useState('');
    const [checked, setChecked] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const sortedSaleProducts = useMemo(() => {
        if (checked) {
            return productRes.filter((saleProd) => saleProd.discont_price);
        }
		return productRes;
	}, [productRes, checked]);

	const sortedProducts = useMemo(() => {
		if (sortProducts === 'asc') {
			return [...sortedSaleProducts].sort((a, b) => a.price - b.price);
		}
		if (sortProducts === 'desc') {
			return [...sortedSaleProducts].sort((a, b) => b.price - a.price);
		}
		return sortedSaleProducts;
	}, [sortedSaleProducts, sortProducts]);

    const sortedMinProducts = useMemo(() => {
        if (minPrice.length >= 1) {
            return sortedProducts.filter((minProd) => minProd.price >= minPrice);
        }
		return sortedProducts;
	}, [sortedProducts, minPrice]);

    const sortedMaxProducts = useMemo(() => {
        if (maxPrice.length >= 1) {
            return sortedMinProducts.filter((maxProd) => maxProd.price <= maxPrice);
        }
		return sortedMinProducts;
	}, [sortedMinProducts, maxPrice]);
    
    return (
        <>
            <h1 className="title">{category.title}</h1>
            <Row className="filter">
                <Col md="auto">
                    <label className="filter-label">
                        <span className="filter-label__name">Price</span>
                        <input type="number" className="first-price" placeholder="From" onChange={(e) => setMinPrice(e.target.value)}/>
                        <input type="number" className="last-price" placeholder="To" onChange={(e) => setMaxPrice(e.target.value)}/>
                    </label>
                </Col>
                <Col md="auto">
                    <label className="filter-label">
                        <span className="filter-label__name">Discounted items</span>
                        <input type="checkbox" name="checkbox" className="discount" value={checked} onChange={(e) => setChecked(e.target.checked)}/>
                    </label>
                </Col>
                <Col md="auto">
                    <label className="filter-label">
                        <span className="filter-label__name">Sorted</span>
                        <select value={sortProducts} onChange={(e) => setSortProducts(e.target.value)}>
                            <option value="">by default</option>
                            <option value="asc">Ascending price</option>
                            <option value="desc">Descending price</option>
                        </select>
                    </label>
                </Col>
            </Row>
            <Row md={4} sm={3} xs={2}>
                {sortedMaxProducts.map((product) => (
                    <Col key={product.id} className="product">
                        <ProductsItem id={product.id} image={product.image} title={product.title} price={product.price} discont_price={product.discont_price}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Category;