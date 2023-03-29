import React from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import Navigation from '../../../shared/components/Navigation/Navigation'
import mail from '../../../images/icons/mail.svg'
import smilingLady from '../../../images/happy-girl.png'
import HeroGradientBg from '../component/HeroGradientBg'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Hero() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        < div className='hero-section' >
            <Navigation />
            <div className='hero-inner'>
                <div className='hero-inner2'>
                    <Container>
                        <Row>
                            <Col md={7} id='first'>
                                <div className="hero-left">
                                    <div className="">
                                        <div className="mb-3">
                                            <h1 className="hero-title">Build Your Creditline, Get Fast Access To Loans &amp; Make Better Borrowing Decisions.</h1>
                                        </div>
                                        <Row>
                                            <Col md={9}>
                                                <h2 className="hero-subtitle">Get matched. Compare rates. Save money.</h2>
                                                <p className="hero-text">You can become invisible to financial struggles and get fast access to loans on Crowdbux. In a few easy steps, you are well on your way to getting that specific loan you urgently need.</p>
                                                <div onClick={() => setModalShow(true)} className="subscribe_btn hvr-icon-wobble-horizontal">
                                                    Join our waiting list
                                                    <img src={mail} alt="mail" className="hvr-icon" />
                                                </div>
                                                <MyVerticallyCenteredModal
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                />
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
        </div >
    )
}

export default Hero
