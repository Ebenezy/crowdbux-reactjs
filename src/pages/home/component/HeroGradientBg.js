import React from 'react'
import { Row, Col } from 'react-bootstrap'
import square1 from '../../../images/icons/square1.svg'
import square2 from '../../../images/icons/square2.svg'
import secure from '../../../images/icons/secure-crowdbux.svg'
import fullUser from '../../../images/icons/full-user-control-crowdbux.svg'
import dailyPayouts from '../../../images/icons/daily-payouts-crowdbux.svg'

const HeroGradientBg = () => {
    return (
        <div className='hero-gradient-bg'>
            <div className='hero-gradient-bg1'>
                <img src={square1} alt='square' />
            </div>
            <Row>
                <Col md={7}>
                    <Row>
                        <Col md={4}>
                            <div className='hero-gradient-1'>
                                <img src={secure} alt='secure-crowdbux' />
                                <p>Secured Transactions</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='hero-gradient-1'>
                                <img src={fullUser} alt='full-user-control-crowdbux' />
                                <p>Full User Control</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='hero-gradient-1'>
                                <img src={dailyPayouts} alt='daily-payouts-crowdbux' />
                                <p>Daily Payouts</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className='hero-gradient-bg2'>
                <img src={square2} alt='square' />
            </div>
        </div>
    )
}

export default HeroGradientBg
