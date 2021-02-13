import React from 'react';
import { Link } from 'react-router-dom';
import './styles/dashboard.scss';
import Product from './assets/Product Icon.svg';
import Market from './assets/Market Price Icon.svg';
import List from './assets/Listings Icon.svg';
import Profile from './assets/Profile Icon.svg';
import { withRouter } from 'react-router-dom';

import {connect} from 'react-redux';
import Signout from './signout';


function Nav () {
    // console.log(props, 'this is the props')
    
    return (
        <div className='navCont'>
            <nav className='nav'>
                <Link to='/'>
                    <h1> Sauti. </h1>
                </Link>
                <Signout />
            </nav>
        </div>
        
    )
}

function Header (props) {
    console.log(props, 'this is the props')
    let name = props.props.userDetails.fname
    name = name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})

    return <div className='headerDash' >  
    {name} Dashboard
    </div>
}

function Boards () {

    return (
        <div className='boardContainer'>
            <div className='firstList'>
                <div className='board1'>
                    <Link to='product'>
                        <h1> Add Product </h1>
                    </Link>
                    <p> Create a listing for your product </p>

                    <img src={Product} alt='' />
                </div>

                <div className='board2'>
                    <Link to='market'>
                        <h1> Market Prices </h1>
                    </Link>
                    <p> Compare current market prices </p>

                    <img src={Market} alt='' />
                </div>
            </div>

            <div className='secondList'>
                <div className='board3'>
                    <Link to='list'>
                        <h1> Listings </h1>
                    </Link>
                    <p> All of your listings in one place </p>

                    <img src={List} alt='' />
                </div>

                <div className='board4'>
                    <Link to='profile'>
                        <h1> Profile </h1>
                    </Link>
                    <p> Edit and update your profile </p>

                    <img src={Profile} alt='' />
                </div>
            </div>
        </div>
    )
}


function Footer () {
    return (
        <div className='footerCont'>
            <footer>
                <div>
                    <p> Contact </p>
                </div>
                
                <div>
                    <p> About </p>
                </div>
            </footer>
        </div>
    )
}

function Dashboard (props) {

    return (
        <div className='dashboard'>
            <Nav />
            <Header props={props} />
            <Boards />
            <Footer />
        </div>
    )
}


const mapStatetoProps=(state)=>{
    return{
        userDetails:state.user.userDetails,
    }
}


export default connect(mapStatetoProps)(Dashboard);
