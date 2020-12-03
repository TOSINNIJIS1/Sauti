import React from 'react';
import './styles/dashboard.scss';

function Nav () {
    
    return (
        <div className='navCont'>
            <nav className='nav'>
                <h1> Sauti. </h1>
                <p> Sign Out </p>
            </nav>
        </div>
        
    )
}

function Header () {

    return <div className='headerDash'> My Dashboard </div>
}

function Boards () {

    return (
        <div className='boardContainer'>
            <div className='firstList'>
                <div className='board1'>
                    <h1> Add Product </h1>
                    <p> Create a listing for your product </p>
                </div>

                <div className='board2'>
                    <h1> Market Prices </h1>
                    <p> Compare current market prices </p>
                </div>
            </div>

            <div className='secondList'>
                <div className='board3'>
                    <h1> Listings </h1>
                    <p> All of your listings in one place </p>
                </div>

                <div className='board4'>
                    <h1> Profile </h1>
                    <p> Edit and update your profile </p>
                </div>
            </div>
        </div>
    )
}


function Footer () {
    return (
        <div className='footerCont'>
            <footer>
                <p> Contact </p>
                <p> About </p>
            </footer>
        </div>
    )
}

export default function Dashboard () {


    return (
        <div>
            <Nav />
            <Header />
            <Boards />
            <Footer />
        </div>
    )
}