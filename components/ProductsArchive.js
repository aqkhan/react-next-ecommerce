import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useStateValue } from '../context/state';

const ProductsArchive = () => {
    const [ { products } ] = useStateValue();
    return (
        <Container className="product-container">
            <Row>
                {
                    products && products.map( (product, i) => (
                        <Col key={i +1}>
                            <ProductCard key={i} product={product} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default ProductsArchive;