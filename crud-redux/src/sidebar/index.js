import React from 'react'
import '../sidebar.css'
import Rightsidebar from '../right-sidebar/';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Table, Navbar, Container, Button } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <>
			<div class="sidebar">
				<a class="active" href="#home">Home</a>
				<a>
				<Link to="/add" style={{ textDecoration: 'none', color: 'white' }} >Add Task</Link></a>
			</div>

			<div class="content">
				<Rightsidebar />
			</div>
			
        </>
    )
}

export default Sidebar
