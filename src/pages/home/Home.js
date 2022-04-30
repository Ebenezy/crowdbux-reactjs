import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navigation from '../../shared/components/Navigation/Navigation'
import mail from '../../images/icons/mail.svg'
import smilingLady from '../../images/happy-girl.png'
import HeroGradientBg from './component/HeroGradientBg'
import AppBenefits from './component/AppBenefits'
import TheMobileApp from './component/TheMobileApp'
import Faq from './component/Faq'
import Footer from '../../shared/components/footer/Footer'

const Home = () => {
    return (
        <div>
            <div className='hero-section'>
                <Navigation />
                <div className='hero-inner'>
                    <div className='hero-inner2'>
                        <Container>
                            <Row>
                                <Col md={7} id='first'>
                                    <div className="hero-left">
                                        <div className="">
                                            <div className="mb-3">
                                                <h1 className="hero-title">Take loans, gives <br />in 5 minutes.</h1>
                                            </div>
                                            <Row>
                                                <Col md={8}>
                                                    <p className="hero-subtitle">Loans. Loans. Loans</p>
                                                    <p className="hero-text">quia voluptas sit aspernatur aut odit aut fugit,  eos qui rati quia voluptas sit aspernatur</p>
                                                    <div
                                                        className="subscribe_btn hvr-icon-wobble-horizontal">
                                                        Join our waiting list
                                                        <img src={mail} alt="next" className="hvr-icon" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>

                                </Col>
                                <Col md={5} id='second'>
                                    <div className="landing-hero-img">
                                        <img src={smilingLady} className='' alt='crowdbux' /></div>
                                </Col>
                            </Row>
                            <HeroGradientBg />
                        </Container>
                    </div>
                </div>
                <div></div>
            </div>
            <AppBenefits />
            <TheMobileApp />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home
