import React from 'react';
import './style/product.scss';
// import axios from 'axios';
import Upload from './image/upload.png';
import {Link} from 'react-router-dom';
import NavAll from '../NavForAll/NavAll'
import Footer from '../footer/footer'
import Signout from '../dashboard/signout';


let CATEGORIES = ['Clothes', 'Shoes', 'Jewelries']
class ProductInfo extends React.Component {
    state = {
        location: '',
        category: '',
        item: '',
        Description: '',
        price: '',
        upload: null
    }


    target = (e) => {
        return ({target: { value }}) => {
            this.setState((oldProduct) => (
                ({...oldProduct, [e]: value })
            ))
        }
    }


    onSubmit = e => {
        e.preventDefault()
    }

    imageOnchange = e => {
        this.setState({
            upload: e.target.file[0]
        })
    }

    imageUpload = e => {
        console.log(e)
        // const newData = new FormData();
        // newData.append('image', this.state.upload, this.state.upload.name);

        // axios.post('', newData, {
        //     onUploadProgress: ProgressEvent => {
        //         console.log('Upload Progress: ' + (ProgressEvent.loaded / ProgressEvent.total * 100) + '%' )
        //     }
        // })
        // .then(res => { console.log(res)})
        // .catch(err => console.log(err))
    }

    render () {
        return (
            <div>
                <div className='productCont'>
                    <NavAll />
                    <div className='left'>
                        <h1> Sauti </h1>
                        <hr />

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
                                <h4 link to='/profile'> Profile </h4>
                            </Link>
                            
                            <Link to='/product' >
                                <h4 style={{color: 'white'}}> Add Product </h4>
                            </Link>
                        </nav>

                        <Signout />

                    </div>
        
                    <div className='right'>
                        <form onSubmit={this.onSubmit}>
                            <label> Location </label>
                            <input required
                            type='text'
                            value={this.state.location}
                            onChange={this.target('location')}
                            />
                            <label> Category </label>
                            <select required
                            value={this.state.category}
                            > <option> Select </option> 
                            {CATEGORIES.map((data, i) => <option key={i}> {data} </option> )}
                            </select>
                            
                            <label> Item </label>
                            <input required
                            />
                            <label> Description </label>
                            <input required
                            />
                            <label> Price </label>
                            <input required
                            />
                            
                            <label className='up'> Upload Image </label>
                            <input required 
                            type='file'
                            name='image'
                            style={{display: 'none'}}
                            onChange={this.imageOnchange}
                            ref={fileUpload => this.fileUpload = fileUpload }
                            
                            />
                            <div className='upload'>
                                <img src={Upload} alt='upload' 
                                onClick={() => this.fileUpload.click()}
                                
                                />
                            </div>
        
                            <button onClick={this.imageUpload} disabled > Add Product </button>
                        </form>
                    </div>
                </div>
            </div>
        )

    }

}

export default function Product() {

    return (
        <div className='prodFooter'>
            <ProductInfo />
            <Footer />
        </div>
    )
    
}