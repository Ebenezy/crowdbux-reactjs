import React from 'react'
import './footer.css'
import logo from '../../../images/crowdbux-logo.svg'
import facebook from '../../../images/icons/facebook.svg'
import twitter from '../../../images/icons/twitter.svg'
import linkedin from '../../../images/icons/linkedin.svg'
import instagram from '../../../images/icons/instagram.svg'
import { Col, Container, Row, } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer2">
                <Container>
                    <Row>
                        <Col md={6} className="mb-3">
                            <div className="footer-left">
                                <img
                                    src={logo}
                                    alt="crowdbux-logo"
                                />
                                <div className="social d-flex mt-3 mb-3">
                                    <a href="http://facebook.com/" target="_blank" rel="noreferrer">
                                        <div className="circle">
                                            <img src={facebook}
                                                alt="facebook"
                                                style={{ width: 11.67 }}
                                            />
                                        </div>
                                    </a>
                                    <a href="http://twitter.com/" target="_blank" rel="noreferrer">
                                        <div className="circle">
                                            <img
                                                src={twitter}
                                                alt="twitter"
                                            />
                                        </div>
                                    </a>
                                    <a
                                        href="http://linkedin.com/company/"
                                        target="_blank" rel="noreferrer">
                                        <div className="circle">
                                            <img
                                                src={linkedin}
                                                alt="linkedin"
                                            />
                                        </div>
                                    </a>
                                    <a href="http://instagram.com/" target="_blank" rel="noreferrer">
                                        <div className="circle">
                                            <img
                                                src={instagram}
                                                alt="instagram"
                                            />
                                        </div>
                                    </a>
                                </div>
                                <p className="cc">
                                    © 2022 Crowdbux. All rights reserved
                                </p>
                            </div>
                        </Col>
                        <Col md={3} className="mb-3">
                            <div className="footer-right">
                                <p className="footer-title">Office Address</p>
                                <p className="footer-subtitle">Lagos:</p>
                                <p className="footer-text">
                                    Lasgos Mainland, Lagos
                                </p>
                            </div>
                        </Col>
                        <Col md={2} className="mb-3">
                            <div className="footer-right">
                                <p className="footer-title">Contact</p>
                                <p className="footer-subtitle">Phone:</p>
                                <a href="tel:(470)6583773" className="footer-text">(470) 658 3773 </a>
                                <p className="footer-subtitle">Email:</p>
                                <a
                                    href="mailto:hello@crowdbux.com"
                                    className="footer-text email-link display-flex">
                                    hello@crowdbux.com
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer
