import React from 'react';
import './styles/landingNavBar.scss';
import './styles/landingHeader.scss';
import './styles/services.scss';
import './styles/join.scss';
import './styles/review.scss';
import { Link } from 'react-router-dom';
import Mobile from './assets/Mobile Icon.png'
import Trading from './assets/Paper Icon.png'
import Market from './assets/Coin Icon.png'

function Nav () {
    return (
        <div>
            <nav className='landingNav'>
                <ul className='left'>
                    <li className='landingLogo'> Sauti. </li>
                </ul>

                <ul className='right'>
                    <Link to='/about' className='about'> About </Link>
                    <Link to='/login' className='login'> Sign In  </Link>
                </ul>
            </nav>
            
        </div>
    )
}

function Header () {
    return (
        <div className='header-container'>
            <h1 className='h1'> Cross-Border Traders </h1>
            <p className='p'>Empowering women-led SMEs to trade legally, safely and profitably across borders.</p>
        </div>
    )
}

function Service () {
    return (
        <div>
                        <Info />    

            <Services />
            <Join />
            <Testimonial />
        </div>
    )
}

function Info () {
    return <div>
        <h4 className='h4'> Our services for East Africa’s traders </h4>
    </div>
}

function Services () {
    return (
        <div className='servicesContainer'>
            
            <div className='mobile'>
                <img src={Mobile} alt='' />
                <h1> Mobile Based Services </h1>
                <p> SMS Technologies <br/> Mobile & Web Applications </p>
            </div>

            <div className='trading'>
                <img src={Trading} alt=''/>
                <h1> Trading Procedures </h1>
                <p> Simplied regulatory procedures <br/> for cross border trade </p>
            </div>

            <div className='market'>
                <img src={Market} alt='' />
                <h1> Market Prices </h1>
                <p> Daily wholesale and retail price comparison for over 100 products </p>
            </div>
        </div>
    )
}


function Join () {

    return (
        <div className='join'>
            <p class='join-info'
            style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '18px',
                lineHeight: '27px',
                color: '#20141D',
                textAlign: 'center',
                marginTop: '10%'
                }}
            > 
            Join Sauti and take control of your border business today  
            </p>

            <div className='reg'>
                <Link to='/register' className='p'> Sign Up </Link>
            </div>
            
        </div>
    )
}

function Testimonial () {
    return (
        <div className='traders'>
            <h1 style={{
                textAlign: 'center',
                fontWeight: '700',
                fontFamily: 'Poppins',
                fontSize: '24px',
                lineHeight: '36px',
                color: '#20141D',
                marginTop: '10%',
                marginBottom: '5%'
            }}> What traders are saying about Sauti </h1>

            <Review />
            <Footer />

        </div>
    )
}

function Review () {

    return (
        <div className='reviewContainer'>
            <div className='review1'>
                <p> “With Sauti now, at the comfort of my couch or kitchen, I can get all <br /> the business and customs information I need right in my cheap old <br /> phone. I’m now more confident to pass through the gazetted route <br /> and not scared of personally clearing my goods."</p>
                <h1>-Middy Amule, Cross-Border Trader, Busia, Uganda</h1>
            </div>

            <div className='review2'>
                <p> “Sauti is like a secret partner in my business – it’s there to give me <br /> information before I go to the market and help me estimate my <br /> profit. Before I even leave my house I know the price of groundnuts <br /> in Gulu and Lira, the current exchange rate and the amount of tax I <br /> will pay” </p>
                <h1> -Edna Mudibo, Cross-Border Trader, Busia, Kenya </h1>
            </div>

        </div>
    )
}

function Footer () {
    return <div className='footer'>
        <p> Contact </p>
        <p> About </p>
    </div>
}

export default function Landing () {
    return (
        <div className='bb-cont'>
            <div className='bb' >
                <Nav />
                <Header />
            </div>
            <Service />
        </div>
    )
}