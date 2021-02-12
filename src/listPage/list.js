import React, { useState } from 'react';
import './styles/list.scss';
import Edit from './edit';
import { Link } from 'react-router-dom';
import NavAll from '../NavForAll/NavAll';
import Footer from '../footer/footer'
import axiosWithAuth from '../auth/authWithAuth'
import Pagination from '../pagination/pagination';
import axios from 'axios';
import Upload from './images/empty.jpg'

function CardList () {
    const [ list, setList ] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [listPerPage] = useState(3)

    const indexOfLastPost = currentPage * listPerPage;
    const indexOfFirstPost = indexOfLastPost - listPerPage;
    const currentProducts = list.slice(indexOfFirstPost, indexOfLastPost);

    // let newImage = currentProducts.map(data => data.image)
    // if (newImage) {
    //     var imageFile = data.image
    // } else {
    //     imageFile = Upload
    // }
                // }

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    React.useEffect(() => {
        GetRequest()
    },[])

    const GetRequest = () => {
        axios.get('http://localhost:1000/api/products')
        .then(res => {
            console.log(res)
            setList(res.data)
        })
        .catch(error => error)
    }


    return (
        <div className='listContainer'>
            <NavAll />
            <div className='left'>
                <h1 Link to='/'> Sauti </h1>
                <hr />

                <h3> Listings </h3> 

                <nav style={{cursor: 'pointer'}}>
                    <Link to='/'>
                        <h4> Home </h4>
                    </Link>

                    <Link to='/market'>
                        <h4> Market Price </h4>
                    </Link>

                    <Link to='/list'>
                        <h4 style={{color: 'white'}}> Listings </h4>
                    </Link>

                    <Link to='/profile'>
                        <h4 link to='/profile'> Profile </h4>
                    </Link>
                    
                    <Link to='/product'>
                        <h4 link to='product'> Add Product </h4>
                    </Link>
                </nav>

                <p> Sign Out </p>
            </div>


            <div className='listRight'>
            {currentProducts.map (data => (
                
                <div className='card'>
                    <img src={data.image} alt='image'  style={{objectFit: 'cover'}}  />
                    
                    <div className='category'>
                        <h1> {data.category} {data.price} </h1>
                        <p> {data.item} </p>
                        <Link to='/edit'>
                        <button> Edit </button>
                        </Link>
                    </div>
                </div>
            ))}
            <Pagination pagine={paginate} length={list.length} page={listPerPage} />
            <Footer/>

            </div>

        </div>
    )
}

export default function ListProduct() {
    return (
        <div>
            <CardList />
            {/* <Edit /> */}
        </div>
    )
}