import React from 'react'
import { Alert } from 'react-bootstrap'

function AlertMessage({message, variant}) {
    return (
        <Alert variant={variant}>
            <p>{message}</p>
        </Alert>
    )
}

export default AlertMessage
