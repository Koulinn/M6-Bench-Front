import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { getRequest } from '../../lib/requests'
import ProdCard from '../Card/ProdCard'

function DisplayCards({ products }) {

    return (
        <Container className="mt-5 cards-decker">
            <h2>{products.category ? products.category.category : 'All'}</h2>
            <div className="d-flex justify-content-between flex-wrap">
                {products.category ? products.category.products.map(product => <ProdCard product={product} />) :
                    products.allProducts ? products.allProducts.map(product => <ProdCard product={product} />) :
                        products.map(product => <ProdCard product={product} />)
                }

            </div>


        </Container>
    )
}

export default DisplayCards
