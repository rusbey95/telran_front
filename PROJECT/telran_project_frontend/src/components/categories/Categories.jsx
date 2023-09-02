import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import CategoriesItem from './CategoriesItem';
import { categoriesAction } from '../../store/actions/getCategoriesAction';


function Catigories() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoriesAction());
    });

    const categories = useSelector(state => state.category.categories);

    return (
        <>
            <h2 className="title title-page">Categories</h2>
            <Row>
                {
                    categories.map((category) => (
                        <Col key={category.id} className="category" xs="6" lg="4" xl="3">
                            <CategoriesItem id={category.id} image={category.image} title={category.title}/>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default Catigories;