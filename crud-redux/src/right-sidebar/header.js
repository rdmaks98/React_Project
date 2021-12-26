import React from 'react'
import Add from './add'
import Home from './home'
import './header'
import './right_sidebar.css'
import { Table, Navbar, Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <i class="fas fa-search"></i> &nbsp;
                            <Link to="/" style={{ textDecoration: 'none' }} > Home</Link> &nbsp;
                            <Button variant="success" size="sm">
                                <Link to="/add" style={{ textDecoration: 'none', color: 'white' }} ><i class="fas fa-plus-circle"></i> Add New</Link>
                            </Button> &nbsp;
                            <i class="fas fa-bell"></i>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route exact path="/add" element={<Add />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default Header
