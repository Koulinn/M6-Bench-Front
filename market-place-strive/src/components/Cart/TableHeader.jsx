import React from 'react'
import { Col } from 'react-bootstrap'

function TableHeader() {
    return (
        <Col className="d-flex my-3 p-0 justify-content-between">
            <div style={{width:'30%'}}>Name</div>
            <div style={{width:'20%', textAlign:'center'}}>Qty</div>
            <div style={{width:'20%', textAlign:'center'}}>Totals</div>
            <div style={{width:'20%', textAlign:'center'}}></div>
        </Col>
    )
}

export default TableHeader
