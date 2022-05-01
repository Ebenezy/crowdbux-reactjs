import React from 'react'
import { Container, Accordion, Row, Col } from 'react-bootstrap'

const Faq = () => {
    return (
        <div id='faq' className='faq-section'>
            <Container>
                <div className='text-center mb-5'>
                    <h1 className='section-title'>Frequently Asked Questions</h1>
                    <p className='section-subtitle'>Get answers to your questions and challenges</p>
                </div>
                <div >
                    <Row>
                        <Col md={9} className='mx-auto'>
                            <p className='section-subtitle'>General</p>
                            <Accordion>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="0" >
                                        <Accordion.Header>What is Crowdbux</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Crowdbux is Nigeria’s most efficient and inclusive digital platform for loan matching and credit building.</p>

                                            <p>Crowdbux represents the essence of digitizing and aggregating micro-finance products and making it much easier to reduce default rates and make better financial decisions.</p>

                                            <p>The platform is the easiest way to find the best loan offerings that will suit your unique borrowing needs.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Which platforms are supported?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Web, the Crowdbux web app is where all the magic happens, it is very easy to use and navigate. We are currently working on the mobile app to give you a better experience.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How do I sign up for Crowdbux?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>By simply visiting app.crowdbuxng.com and creating an account in 2 easy steps after providing your information:</p>
                                            <p>* full name (matching your govt issued identity card)<br />
                                                * Phone number<br />
                                                * BVN<br />
                                                * Email</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>How do I become a vendor?</Accordion.Header>
                                        <Accordion.Body>
                                            Nothing is easier on the platform, just click the become a vendor button, fill out a short form and a vendor relations representative will contact you within 24hrs.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Who is a Crowdbux citizen? </Accordion.Header>
                                        <Accordion.Body>
                                            They are you and you are them, once you have fully completed your registration on the Crowdbux platform, you automatically become a Crowdbux citizen.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>What is Crowdbux safety score?</Accordion.Header>
                                        <Accordion.Body>
                                            This is a general credit assessment based on the validity of the data that you input and upload in your credit profile.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>What is Crowdbux credit line?</Accordion.Header>
                                        <Accordion.Body>
                                            A line of credit starting from 10,000 up to 5M, and is strictly dependent on your credit assessment.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Do lenders know me?</Accordion.Header>
                                        <Accordion.Body>
                                            Not until you have requested for a loan do lenders receive any information about you or your request.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header>Do other borrowers know me?</Accordion.Header>
                                        <Accordion.Body>
                                            Absolutely not, they do not also have access to your personal information or data, so be rest assured of privacy when using Crowdbux.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="9">
                                        <Accordion.Header>Why should I use Crowdbux?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>We don’t want to blow our own trumpets but here are 3 key reasons why:</p>
                                            <p>
                                                * Crowdbux aggregates all the best lenders, including your faves, just to bring you only the best interest rates on offer anywhere in Nigeria.<br />
                                                * Crowdbux loan matching service is completely free, we only earn a commission when your loan gets approved and disbursed into your wallet.<br />
                                                * Crowdbux places value on your identity assets including bank statements, utility bills and even guarantors enabling you to build, manage and maintain a healthy credit profile.
                                                Amazing right 🤩, but don’t take our word for it, sign up today and be a Crowdbux citizen to enjoy these benefits and more.
                                            </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="10">
                                        <Accordion.Header>Is Crowdbux regulated?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, crowdbux is fully regulated under the relevant laws and regulations guiding the operations of digital finance in Nigeria. So rest assured, your data and any other information you trust us with is safe.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <p className='section-subtitle'>Wallet</p>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="11">
                                        <Accordion.Header>How do I fund my Crowdbux wallet?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>You will not be able to fund your wallet from the get-go, however, when your loan application gets processed and approved, the cash is instantly disbursed into your wallet and you can easily withdraw into your bank account.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="12">
                                        <Accordion.Header>How do I withdraw from my Crowdbux wallet?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Very simple, very secure, just click the withdraw button, select your bank and amount to be withdrawn, agree to terms and your funds are transaferred to your account in a heartbeat.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <p className='section-subtitle'>Identity verification</p>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="13">
                                        <Accordion.Header>What documents and/or informations do I need to complete my KYC form?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>You need BVN, a government-issued ID card, a utility bill, a bank statement not older than 3 months.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="14">
                                        <Accordion.Header>How do I send my documents?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Simple, just click the upload buttons in the KYC forms and select the required document from your phone.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="15">
                                        <Accordion.Header>How will you verify my documents?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Through our trusted 3rd party biometric and identity verification service providers.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <p className='section-subtitle'>Loans</p>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="16">
                                        <Accordion.Header>Can I request and obtain a loan on Crowdbux?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Yes, you absolutely can.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="16">
                                        <Accordion.Header>How does it work?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Just select and click on your preferred category of loans, input the required informations and you'll be matched with loan offerings in less than 3minutes. Once you find a loan offering that suits your unique needs, simply click the request button, update your KYC in your credit profile and you’re well on your way to getting your loan.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="17">
                                        <Accordion.Header>Can I terminate my loan before maturity?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>No, you can not terminate your active loans.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="18">
                                        <Accordion.Header>Can I request for multiple loans?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>You absolutely can, as long as you have not exceeded your credit line.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="19">
                                        <Accordion.Header>Can I keep track of my loans?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Yes, you can easily view all your active and settled loan history in your credit profile.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                                <div className='b_collapse'>
                                    <Accordion.Item eventKey="20">
                                        <Accordion.Header>*couldn’t find what you were looking for? Send us an email</Accordion.Header>
                                        <Accordion.Body>
                                            <a href='mailto:hello@mycrowdbux.com'>hello@mycrowdbux.com</a>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                            </Accordion>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Faq
