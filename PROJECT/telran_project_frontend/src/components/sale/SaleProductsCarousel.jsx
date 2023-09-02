import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import { responsive } from '../../carouselBreakpoints';
import ProductsItem from '../products/ProductsItem';
import { productsAction } from '../../store/actions/getProductsAction';


function SaleProductsCarousel() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsAction());
    });

    const products = useSelector(state => state.product.products);
    const productsWithSale = products.filter(product => product.discont_price !== null);
    
    return (
        <section className="sale-slider">
            <Container>
                <Row>
                    <Col>
                        <h2 className="title">Sale</h2>
                    </Col>
                </Row>
                <Carousel responsive={responsive} className="categories-slider__carousel">
                    {productsWithSale.map((product) => (
                        <div key={product.id} className="product product-panel">
                            <ProductsItem id={product.id} image={product.image} title={product.title} price={product.price} discont_price={product.discont_price}/>
                        </div>
                    ))}
                </Carousel>
            </Container>
        </section>
    )
}

export default SaleProductsCarousel;