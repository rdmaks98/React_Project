import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="../images/logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}{' '}{' '}{' '}
                            Home
                        </Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link href="#register">Register</Nav.Link>
                            <Nav.Link href="#register">Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Header
