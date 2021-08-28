import React from 'react'
import { useEffect, useState } from 'react'
import CategoriesBar from '../CategoriesBar/CategoriesBar'
import Hero from '../Hero/Hero'
import DisplayCards from '../DisplayCards/DisplayCards'

function Home(props) {
    const [products, setProducts] = useState([])
    
    return (
        <div>
            <Hero />
            <CategoriesBar setProducts={setProducts} className="mt-5" />
            <DisplayCards />

        </div>
    )
}

export default Home
