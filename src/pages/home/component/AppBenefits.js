import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import crowdbuxApp from '../../../images/crowdbux-app.png'
import crowdbuxApp2 from '../../../images/crowdbux-app2.png'

const AppBenefits = () => {
    return (
        <div className='app-benefits-section'>
            <Container>
                <Row>
                    <Col md={5} className='mb-4'>
                        <div className='app-benefits'>
                            <div>
                                <div className='app-subtitle'>Rotational Savings</div>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 6, offset: 1 }} className='mb-4'>
                        <div className='app-image'>
                            <img src={crowdbuxApp} alt='crowdbux app' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='mb-4' id='first'>
                        <div className='app-image'>
                            <img src={crowdbuxApp2} alt='crowdbux app' />
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }} className='mb-4' id='second'>
                        <div className='app-benefits'>
                            <div>
                                <div className='app-subtitle'>Peer to Peer Lending</div>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} className='mb-4'>
                        <div className='app-benefits'>
                            <div>
                                <div className='app-subtitle'>Rotational Savings</div>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 6, offset: 1 }} className='mb-4'>
                        <div className='app-image'>
                            <img src={crowdbuxApp} alt='crowdbux app' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='mb-4' id='first'>
                        <div className='app-image'>
                            <img src={crowdbuxApp2} alt='crowdbux app' />
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }} className='mb-4' id='second'>
                        <div className='app-benefits'>
                            <div>
                                <div className='app-subtitle'>Peer to Peer Lending</div>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default AppBenefits
