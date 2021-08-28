import React from 'react'
import {Card, Button, Badge} from 'react-bootstrap'

function ProdCard({product}) {
    return (
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Badge pill variant="warning">{`£ ${product.price}`}</Badge>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <div className="d-flex justify-content-between">
                    <Button variant="primary">Buy</Button>
                    <Button variant="inlink">Details</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProdCard
