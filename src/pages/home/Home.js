import React from 'react'
import Hero from './component/Hero'
import AppFeatures from './component/AppFeatures'
import TheMobileApp from './component/TheMobileApp'
import Faq from './component/Faq'
import Footer from '../../shared/components/footer/Footer'

function Home() {
    // componentDidMount() {
    //     window.scrollTo(0, 0);
    // }
    return (
        <div>
            <Hero />
            <AppFeatures />
            <TheMobileApp />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home
