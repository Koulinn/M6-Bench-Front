import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { getRequest } from '../../lib/requests'
import ProdCard from '../Card/ProdCard'

function DisplayCards({ products, filter, setUpdatedCart, updateCart }) {

    return (
        <Container className="mt-5 cards-decker">
            <h2>{filter}</h2>
            <div className="d-flex justify-content-between flex-wrap">
                {products.category ? products.category.products.map(product => <ProdCard key={product.id} product={product}  setUpdatedCart={setUpdatedCart} updateCart={updateCart}/>) :
                    products.allProducts ? products.allProducts.map(product => <ProdCard key={product.id} product={product} setUpdatedCart={setUpdatedCart} updateCart={updateCart}/>) :
                        products.map(product => <ProdCard key={product.id} product={product} setUpdatedCart={setUpdatedCart} updateCart={updateCart}/>)
                }

            </div>


        </Container>
    )
}

export default DisplayCards
