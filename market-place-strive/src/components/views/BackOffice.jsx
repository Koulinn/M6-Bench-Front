import React from 'react'
import { useState } from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import request from '../../lib/requests'

function BackOffice(props) {

    const createCategory = async (data) => {
        try {
            const response = await request.postJSON('category', data, { "Content-Type": "application/json" })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <Container className="mt-5">
            <h2 className="px-3 mb-4">{`Add product`}</h2>
            <Form>

                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" placeholder="Enter product Brand" />
                </Form.Group>

                <Form.Row className="px-3">
                    <Form.Group as={Col} controlId="formGridCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Category" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridprice1">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Price" />
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Col} controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" defaultValue="Description">
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.File
                        className="position-relative"
                        name="Prod image"
                        label="File"
                        id="prodImage"
                    />
                </Form.Group>

                <div className="d-flex mt-5 px-3 justify-content-between">
                    <Button variant="secondary" type="submit">
                        Delete
                    </Button>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </div>
            </Form>
        </Container>
    )
}

export default withRouter(BackOffice)
