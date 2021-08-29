import React from 'react'
import {Button, Container} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { getRequest } from '../../lib/requests'

function PaginationMenu({offset, setOffset, setRequestDataPagination, requestDataPagination}) {
    const [isDisabled, setIsDisabled]= useState(true)

    useEffect(()=> {
        offset === 0 ? setIsDisabled(true): setIsDisabled(false)},[offset])
    
    return (
        <Container className="my-5 d-flex justify-content-center">
        
            <Button variant="white" className="border-secondary mr-3" disabled={isDisabled} onClick={()=>{
                setOffset(offset-4)
                setRequestDataPagination(!requestDataPagination) 
                }}>Previous</Button>
            <Button variant="white" className="border-secondary ml-3" onClick={()=>{
                setOffset(offset+4)
                setRequestDataPagination(!requestDataPagination)
                }}>Next</Button>

        </Container>
    )
}

export default PaginationMenu
