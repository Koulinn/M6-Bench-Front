import React from 'react'
import {Button, Container} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { getRequest } from '../../lib/requests'

function PaginationMenu({offset, setOffset, setRequestDataPagination, requestDataPagination}) {
    const [isDisabled, setIsDisabled]= useState(true)
    
    return (
        <Container className="mt-5 d-flex justify-content-center">
        
            <Button variant="white" className="border-secondary mr-3" disabled={isDisabled} onClick={()=>{
                console.log('previous')
                setOffset(offset-4)
                setRequestDataPagination(!requestDataPagination) 
                offset===0 ? setIsDisabled(true): setIsDisabled(false)
                }}>Previous</Button>
            <Button variant="white" className="border-secondary ml-3" onClick={()=>{
                setOffset(offset+4)
                setRequestDataPagination(!requestDataPagination)
                offset===0 ?setIsDisabled(true): setIsDisabled(false)
                }}>Next</Button>

        </Container>
    )
}

export default PaginationMenu
