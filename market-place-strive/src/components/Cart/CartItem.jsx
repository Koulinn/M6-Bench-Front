import React from 'react'
import { Col } from 'react-bootstrap'

function CartItem({setUpdatedCart, updateCart, group }) {
    return (
        <Col className="d-flex px-0">
            <p>{group.product.name}</p>
            <div className="d-flex">
                <p className="mx-5">$ {group.total_price}</p>
                <p className="mx-5">Qty {group.unitary_qty}</p>
                <div>
                -    
                </div>    
            
            </div>


            
        </Col>
    )
}

export default CartItem
