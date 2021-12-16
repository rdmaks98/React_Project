import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
const Footer = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Develope</Nav.Link>
                        <Nav.Link href="#features">&copy 2021</Nav.Link>
                        <Nav.Link href="#pricing">Made by Rdmakvana</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Footer
