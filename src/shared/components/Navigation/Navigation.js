import React, { Component } from 'react'
import './navigation.css'
import logo from '../../../images/crowdbux-logo.svg'
import mail from '../../../images/icons/mail.svg'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import {
    Link,
} from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div >
                <Navbar expand="lg" className='pt-4'>
                    <Container>
                        <Navbar.Brand as={Link} to="/"><img src={logo} alt="dexter logo" className='logo' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                            >
                                <Nav.Link as={Link} to="/">Mobile App</Nav.Link>
                                <Nav.Link as={Link} to="/">Features</Nav.Link>
                                <Nav.Link className='loginLink' as={Link} to="/">Login/Sign up</Nav.Link>
                                <Button className='getintouch-btn' as={Link} to='/'>Become a vendor <span><img src={mail} alt="dexter logo" className='' width={22} /></span></Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

