import React from 'react'
import { useEffect, useState } from 'react'
import { getRequest } from '../../lib/requests'
import { Button, Container, Spinner } from 'react-bootstrap'

function CategoriesBar({setProducts}) {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        try {
            requestData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const requestData = async () => {
        const serverData = await getRequest('category')
        setCategories(serverData.data.slice(0, 9))
        const getAllProducts = await getRequest('product')
        setAllProducts(getAllProducts.data.slice(0,8))
        setIsLoading(false)
    }




    return (
        <Container className="d-flex justify-content-between">
            {isLoading ? <Spinner animation='border' role='status' className="m-3" /> : <></>}
            {!isLoading ? <Button variant="secondary"onClick={()=>setProducts({allProducts})}>All</Button> : <></>}
            {categories.map(category => {
                return <Button key={category.id} variant="secondary" onClick={()=>setProducts({category})}
                >{category.category}</Button>
            }
            )}
        </Container>
    )
}

export default CategoriesBar
