import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

function TopNavBar({toggleCart, setToggleCart}) {
    return (
        <div id="navBar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="backoffice">Back-office</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">

                            <Nav.Link href="#" onClick={()=>setToggleCart(!toggleCart)}>Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNavBar
