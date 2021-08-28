import React from 'react'
import { useEffect, useState } from 'react'
import CategoriesBar from '../CategoriesBar/CategoriesBar'
import Hero from '../Hero/Hero'
import DisplayCards from '../DisplayCards/DisplayCards'
import { getRequest } from '../../lib/requests'
import PaginationMenu from '../PaginationMenu/PaginationMenu'

function Home(props) {
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState('all')
    const [offset, setOffset] = useState(0)
    const [requestDataPagination, setRequestDataPagination] = useState(false)
    

    useEffect(() => {
        try {
            requestData()
        } catch (error) {
            console.log(error)
        }
    }, [requestDataPagination])
    


    const requestData = async () => {

        if(filter==='all'){
            const getAllProducts = await getRequest('product')
            setProducts(getAllProducts.data.slice(offset, offset + 4))
            return
        } else {
            const filteredProd = await getRequest(`product?offset=${offset}&filter=brand&value=${filter}&order=asc`)
            console.log(filteredProd)
            setProducts(filteredProd.data)
            return
        }
    }
    return (
        <div>
            <Hero />
            <CategoriesBar setProducts={setProducts} setFilter={setFilter} className="mt-5" />
            <DisplayCards products={products} filter={filter} />
            <PaginationMenu offset={offset} setOffset={setOffset} setRequestDataPagination={setRequestDataPagination} requestDataPagination={requestDataPagination}/>

        </div>
    )
}

export default Home
