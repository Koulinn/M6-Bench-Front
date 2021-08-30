import React from 'react'
import { Col } from 'react-bootstrap'
import {MdRemoveCircleOutline} from 'react-icons/md'
import a from 'axios'


function CartItem({ setUpdatedCart, updateCart, group }) {
    return (
        <Col className="d-flex justify-content-between px-0 cart--Item">
            <p>{group.product.name}</p>
            <p className="">{group.unitary_qty}</p>
            <p className="">$ {group.total_price}</p>
            <div className="d-flex justify-content-center cart-delete-icon" onClick={ async ()=>{
               await a.delete(`${process.env.REACT_APP_URL_PROD}cart/1/${group.productId}`)
                setUpdatedCart(!updateCart)
                }
                
                }><MdRemoveCircleOutline/></div>
        </Col>
    )
}

export default CartItem
