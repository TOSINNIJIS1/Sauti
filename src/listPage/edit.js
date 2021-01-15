import React from 'react'
import Image from './images/cristian-newman-tnxRFtXI9dI-unsplash.png';
import {Link} from 'react-router-dom'
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer';

function Edit() {
    return (
        <div className='footCont'>
            <div className='listContainer'>
                <div className='left'>
                    <h1 Link to='/'> Sauti </h1>
                    <hr />
                    
                    <h3> Item </h3> 
                    
                    <nav style={{cursor: 'pointer'}}>
                    <Link to='/'>
                        <h4> Home </h4>
                    </Link>

                    <Link to='/market'>
                        <h4> Market Price </h4>
                    </Link>

                    <Link to='/list'>
                        <h4> Listings </h4>
                    </Link>

                    <Link to='/profile'>
                        <h4 style={{color: 'white'}} link to='/profile'> Profile </h4>
                    </Link>
                    
                    <Link to='/add'>
                        <h4 link to='add'> Add Product </h4>
                    </Link>
                </nav>

                    <p> Sign Out </p>
                </div>
                <NavAll />


                <div className='right' style={{display: 'flex'}}>
                    
                    <div>
                        <h4 className='editHeader' style={{textAlign: 'center'}}> Edit </h4>
                    </div> 
                    <div className='edit'>
                        <div className='editImg'>
                            <img src={Image} alt='' />
                        </div>

                        <div className='form'>
                            {/* <div className='editHeader' style={{textAlign: 'center', fontStyle: 'normal', fontWeight: 'bold', fontSize: '24px', lineHeight: '36px'}}>
                                <h4> Edit </h4>
                            </div> */}

                            <form >
                                <label> Location </label>
                                <input

                                />

                                <label> Category </label>
                                <input 

                                />

                                <label> Item </label>
                                <input 

                                />

                                <label> Description </label>
                                <input 
                                
                                />

                                <label> Price </label>
                                <input 

                                />

                                <button id='save' onClick={(e) => {e.preventDefault()}} > Save </button>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Edit
