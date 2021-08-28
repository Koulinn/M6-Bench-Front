import React from 'react'
import { useEffect, useState } from 'react'
import CategoriesBar from '../CategoriesBar/CategoriesBar'
import Hero from '../Hero/Hero'
import DisplayCards from '../DisplayCards/DisplayCards'
import { getRequest } from '../../lib/requests'

function Home(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        try {
            requestData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const requestData = async () => {
        const getAllProducts = await getRequest('product')
        setProducts(getAllProducts.data.slice(0,8))
    }
    return (
        <div>
            <Hero />
            <CategoriesBar setProducts={setProducts} className="mt-5" />
            <DisplayCards products={products} />

        </div>
    )
}

export default Home
