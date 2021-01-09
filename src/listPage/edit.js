import React from 'react'
import Image from './images/cristian-newman-tnxRFtXI9dI-unsplash.png';
import {Link} from 'react-router-dom'

function Edit() {
    return (
        <div>
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

                <div className='right' style={{display: 'flex'}}>
                    
                    <div className='edit'>
                        <div>
                            <img src={Image} alt='' />
                        </div>

                        <div className='form'>
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

                                <button onClick={(e) => {e.preventDefault()}} > Save </button>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit
