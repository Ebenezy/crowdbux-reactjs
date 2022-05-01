import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import match from '../../../images/crowdbux-app-match.png'
import compare from '../../../images/crowdbux-app-compare.png'
import save from '../../../images/crowdbux-app-save.png'
import creditProfile from '../../../images/crowdbux-app-credit-profile.png'
import withdraw from '../../../images/crowdbux-app-withdraw.png'
import loanHistory from '../../../images/crowdbux-app-loan-history.png'

const AppFeatures = () => {
    return (
        <div id='appFeatures' className='app-benefits-section'>
            <Container>
                <Row>
                    <Col md={5} className='mb-4'>
                        <div className='app-benefits'>
                            <div>
                                <div className='app-subtitle'>Match</div>
                                <h1>Match</h1>
                                <p>Get matched with the best pre-qualified rates from multiple lenders in less than 3mins.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 6, offset: 1 }} className='mb-4'>
                        <div className='app-image'>
                            <img src={match} alt='crowdbux app' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='mb-4' id='first'>
                        <div className='app-image'>
                            <img src={compare} alt='crowdbux app' />
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }} className='mb-4' id='second'>
                        <div className='app-benefits'>
                            <div>
                                <div className='app-subtitle'>Compare</div>
                                <h1>Compare.</h1>
                                <p>Compare multiple interest rates to find the most suitable loans for you.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} className='mb-4'>
                        <div className='app-benefits'>
                            <div>
                                <div className='app-subtitle'>Save</div>
                                <h1>Save.</h1>
                                <p>Save money on interest rates from the most competitive lenders around.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 6, offset: 1 }} className='mb-4'>
                        <div className='app-image'>
                            <img src={save} alt='crowdbux app' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='mb-4' id='first'>
                        <div className='app-image'>
                            <img src={creditProfile} alt='crowdbux app' />
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }} className='mb-4' id='second'>
                        <div className='app-benefits'>
                            <div>
                                <div className='app-subtitle'>Credit Profile</div>
                                <h1>Credit Profile.</h1>
                                <p>Build and manage your credit worthiness simply on the platform.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={5} className='mb-4'>
                        <div className='app-benefits'>
                            <div>
                                <div className='app-subtitle'>Withdraw</div>
                                <h1>Withdraw.</h1>
                                <p>Safetly withraw funds from your wallet to you bank in two easy steps.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 6, offset: 1 }} className='mb-4'>
                        <div className='app-image'>
                            <img src={withdraw} alt='crowdbux app' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='mb-4' id='first'>
                        <div className='app-image'>
                            <img src={loanHistory} alt='crowdbux app' />
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 1 }} className='mb-4' id='second'>
                        <div className='app-benefits'>
                            <div>
                                <div className='app-subtitle'>Loan History</div>
                                <h1>Loan History.</h1>
                                <p>Keep track of your active and settled loans in your credit profile.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default AppFeatures
