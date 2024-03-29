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
                            <Nav className="ms-auto my-2 my-lg-0">
                                <Nav.Link href="#appFeatures">Features</Nav.Link>
                                <Nav.Link href="#mobileapp">Mobile App</Nav.Link>
                                <Nav.Link href="#faq">FAQ</Nav.Link>
                                <Nav.Link className='loginLink' as={Link} to="/">Login</Nav.Link>
                                {/* <iframe class="formlets-iframe" src="https://www.formlets.com/forms/EibrIkdhyqrItSo1/?iframe=true&nofocus=y"
                                    frameborder="0" width="100%"></iframe> */}
                                <Button className='getintouch-btn' as={Link} to='/'>Become a vendor <span><img src={mail} alt="mail" className='' width={22} /></span></Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

