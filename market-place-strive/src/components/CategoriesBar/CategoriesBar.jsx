import React from 'react'
import {useEffect, useState} from 'react'
import { getRequest } from '../../lib/requests'
import {Button, Container, Spinner} from 'react-bootstrap'

function CategoriesBar() {
    const [categories, setCategories]= useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect( async ()=>{
        try {
            const serverData = await getRequest('category')
            setCategories(serverData.data.slice(0,9))
            setIsLoading(false)       
        } catch (error) {
            console.log(error)
        }
    },[])
    

    return (
        <Container className="d-flex justify-content-between">
            {isLoading? <Spinner animation='border' role='status' className="m-3"/> : <></>}
            {!isLoading? <Button variant="secondary">All</Button> : <></>}
            {categories.map(category=><Button key={category.id} variant="secondary">{category.category}</Button> )}  
        </Container>
    )
}

export default CategoriesBar
