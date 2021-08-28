import React from 'react'
import { useState } from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import request from '../../lib/requests'

function BackOffice(props) {
    const [category, setCategory] = useState({ category: 'cake' })
    const [product, setProduct] = useState({
        name: '',
        brand: '',
        price: '',
        description: '',
        image: 'https://www.silverringsplint.com/wp-content/uploads/2018/05/Product-Image-Coming-Soon.png'
    })
    const [image, setImage] = useState(null)

    const postRequest = async (endpoint, data) => {
        try {
            const response = await request.postJSON(endpoint, data)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    const inputHandler = (key, value, action, initialValue) => {
        action({
            ...initialValue,
            [key]: value
        })
    }

    const getCategoryId = async () => {
        try {
            const catData = await request.postJSON('category', category)
            return catData.id
        } catch (error) {
            console.log(error)
        }
    }

    const formImage = (e) => {
        let productFile = new FormData()
        let imageUrlFile = e.target.files[0]
        productFile.append("image", imageUrlFile)
        setImage(productFile)  
    }


    const uploadImage = async (prodId) => {
        try {
            const imageData = await request.uploadImage(`product/image/${prodId}`, image)
            return await imageData.json()
        } catch (error) {
            console.log(error)
        }
    }

    const createProduct = async (e) => {
        try {
            e.preventDefault()
            const prodData = await request.postJSON(`product/${await getCategoryId()}`, product)
            console.log(prodData, 'prod data')
            if(image){
                const prodWithImage = await uploadImage(prodData.id)
                console.log(prodWithImage)
            }
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
                    <Form.Control type="text"
                        placeholder="Enter product Name"
                        onChange={(e) => inputHandler('name', e.target.value, setProduct, product)}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter product Brand"
                        onChange={(e) => inputHandler('brand', e.target.value, setProduct, product)}
                    />
                </Form.Group>

                <Form.Row className="px-3">
                    <Form.Group as={Col} controlId="formGridCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text"
                            placeholder="Category"
                            onChange={(e) => inputHandler('category', e.target.value, setCategory, category)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridprice1">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number"
                            placeholder="Price"
                            onChange={(e) => inputHandler('price', e.target.value, setProduct, product)}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Col} controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea"
                        placeholder="Description"
                        onChange={(e) => inputHandler('description', e.target.value, setProduct, product)}
                    />

                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.File
                        className="position-relative"
                        name="Prod image"
                        label="File"
                        id="prodImage"
                        onChange={(e)=> formImage(e)}
                    />
                </Form.Group>

                <div className="d-flex mt-5 px-3 justify-content-between">
                    <Button variant="secondary" type="submit">
                        Delete
                    </Button>
                    <Button variant="primary" type="button" onClick={(e) => createProduct(e)}>
                        Add
                    </Button>
                </div>
            </Form>
        </Container>
    )
}

export default withRouter(BackOffice)
