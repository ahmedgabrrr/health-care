import React from 'react';
import './nav.css';
import logo from './../../images/logo.png'
import about from '../../pages/about';
import { Link } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhoneAlt, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'

import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function Navbarr() {
    return (
        <BrowserRouter>


            <Navbar expand="lg">
                <Container>


                    <div className='logo' href="#home"><img src={logo} alt="" /></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='active' as={Link} to='/about' > Home</Nav.Link>
                            <NavDropdown title="pages" id="basic-nav-dropdown">
                                <NavDropdown.Item >
                                    About Us
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Our Team
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">FAQ's</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Booking
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">
                                    Login / Register
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Service Detail
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Blog" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Blog Details
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#search"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                            <Nav.Link href="#saa" ><FontAwesomeIcon className='callIcon' icon={faPhoneAlt} /><span >(+02) 010 6490 7076</span></Nav.Link>
                            <button className='contactUs' >CONTACT US <FontAwesomeIcon className='arrowIcon' icon={faSquareArrowUpRight} /></button>

                        </Nav>
                    </Navbar.Collapse>


                </Container>
            </Navbar>

        </BrowserRouter>
    );
}

export default Navbarr;
