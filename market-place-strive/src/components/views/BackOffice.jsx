import React from 'react'
import { useState } from 'react'
import { Form, Button, Col, Container, Spinner } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import request from '../../lib/requests'
import AlertMessage from '../Auxs/AlertMessage'

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
    const [created, setCreated] = useState(false)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

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
            setIsLoading(true)
            e.preventDefault()
            const prodData = await request.postJSON(`product/${await getCategoryId()}`, product)
            if(image){
                const prodWithImage = await uploadImage(prodData.id)
                if(prodWithImage.id){
                    setError(false)
                    setCreated(true)
                    setIsLoading(false)
                    setTimeout(()=>setCreated(false), 5000)
                    resetForm()
                } else {
                    setError(true)
                }
                console.log(prodWithImage)
            }
        } catch (error) {
            setError(true)
            console.log(error)
        }
    }

    const resetForm = () =>{
        document.getElementById('form').reset()

    }

    return (
        <Container className="mt-5">
            <h2 className="px-3 mb-4">{`Add product`}</h2>
            {created || error ? <div className="px-3 my-3"><AlertMessage 
                variant={created? 'success': 'danger'} 
                message={created? 'Product added successfully': `I'm so sorry An error happened`}
            /></div> : <></>}
            {isLoading? <Spinner animation='border' role='status' className="m-3"/> : <></>}
            <Form id="form">

                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter product name"
                        onChange={(e) => inputHandler('name', e.target.value, setProduct, product)}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridBrand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter product brand"
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
