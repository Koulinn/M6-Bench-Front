import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'
import request from '../../lib/requests'
import { useEffect, useState } from 'react'
import generalAux from '../../lib/general-aux'


function Hero() {
    const[heroImg, setHeroImg] = useState(false)

    const getJumboImage = async () => {
        const data = await request.getRequest('product')
        console.log(data)
        setHeroImg( data.data[5].image && data.data[5].image.length> 10 ? data.data[5].image : false)
    }
    useEffect(()=>{
        getJumboImage()
    },[])

    return (
        <Jumbotron id='hero' style={{ backgroundImage: generalAux.heroBG(heroImg) }} className="d-flex flex-column justify-content-end" fluid>
            <Container>
                <h1 className='text-white'>Latest Release</h1>
                <p className='text-white'>
                    Best gaming collection
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Hero
