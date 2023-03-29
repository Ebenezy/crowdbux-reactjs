import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mail2 from '../../../images/icons/mail2.svg'
import blackWoman from '../../../images/black-woman.png'
import square1 from '../../../images/icons/square1.svg'
import square3 from '../../../images/icons/square3.svg'
import square4 from '../../../images/icons/square4.svg'
import appstore from '../../../images/appstore.svg'
import playstore from '../../../images/playstore.svg'

const TheMobileApp = () => {
    return (
        <div id='mobileapp' className="future-section">
            <Container>
                <div className='text-center  mb-5'>
                    <h1 className='section-title'>Our mobile app is on the way</h1>
                    <p className='section-subtitle'>While our mobile is ready explore our Web Applications</p>
                </div>
                <div className="metaverse-futures wave_effect">
                    <div className="circle-effect">

                        <div className="trip_bg_logo">
                            <div className='d-flex justify-content-between'>
                                <div className='hero-gradient-bg5'>
                                    <img src={square4} alt='square' />
                                </div>
                                <div></div>
                                <div className='hero-gradient-bg3'>
                                    <img src={square1} alt='square' />
                                </div>
                                <div></div>
                            </div>
                            <Container className="container">
                                <Row>
                                    <Col md={7} className="">
                                        <div className="the-future-future">
                                            <div className="crowdbux-texts">
                                                <p className="crowdbux-future-text1">
                                                    Get Crowdbux, there's always a unique
                                                    offering
                                                </p>
                                                <h1 className="crowdbux-future-title">For everyone</h1>
                                                <p className="crowdbux-future-text2">
                                                    Let's give you back full control of your credit life with the best loan environment in Nigeria
                                                </p>
                                                <div className="store-buttons">
                                                    <button
                                                        className="partner-btn">
                                                        Join our waitlist
                                                        <span
                                                        ><img
                                                                src={mail2}
                                                                alt="mail"
                                                                width="28"
                                                            /></span></button>
                                                </div>
                                                <div className='d-flex download-store'>
                                                    <img
                                                        src={appstore}
                                                        alt="crowdbux appstore"
                                                    />
                                                    <img
                                                        src={playstore}
                                                        alt="crowdbux playstore"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={5} className="">
                                        <div className="metaverse-img">
                                            <img
                                                src={blackWoman}
                                                alt="crowdbux happy face"
                                            />
                                            <div className='hero-gradient-bg4'>
                                                <img src={square3} alt='square' />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TheMobileApp
