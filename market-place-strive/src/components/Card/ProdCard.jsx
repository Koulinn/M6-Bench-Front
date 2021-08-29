import React from 'react'
import {Card, Button, Badge} from 'react-bootstrap'
import a from 'axios'
const { post } = a

function ProdCard({product, setUpdatedCart, updateCart}) {

    const addToCart = async(prodId)=>{
        const cartRes = await post(`${process.env.REACT_APP_URL_PROD}cart/1/${prodId}`)

    }
    return (
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Badge pill variant="warning">{`£ ${product.price}`}</Badge>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={()=>{
                        addToCart(product.id)
                        setUpdatedCart(!updateCart)
                    }}>Buy</Button>
                    <Button variant="inlink">Details</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProdCard
