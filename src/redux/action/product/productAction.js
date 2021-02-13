import {
    ADD_PRODUCT,
    FETCH_PRODUCT,
    EDIT_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from './productType';
import axios from 'axios';

// const axios = require('axios');


export const addProduct = (data) => {
    axios.post('https://sauti-market-app.herokuapp.com/api/products/')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    return{
        type: ADD_PRODUCT,
        payload: data
    }
}

export const fetchProduct = (id) => {
    return function (dispatch) {
        axios.get('https://sauti-market-app.herokuapp.com/api/products'+id)
        .then((res) => {
            // console.log(res)
            const data = res.data;
            dispatch(getProduct(data));
        })
        .catch((err) => console.log(err)); 
    }
}

export const getProduct=(data)=>{
    return {
        type: FETCH_PRODUCT,
        payload: data
    }
}

export const editProduct = (id, data)=>{
    return {
        type: EDIT_PRODUCT,
        payload: data,
        id:id
    }
}

// export const updatePassCat=(id,category)=>{

// axios.put('')
// .then(res=>console.log(res)).catch(err=>console.log(err));

//   return {
//       type:UPDATE_PASSCAT,
//       payload:category,
//   }
// }

// export const deletePassCat=(id)=>{
//   var OPTIONS = {
//     url: "http://localhost:5000/api/delete-category",
//     method: "DELETE",
//     data:{cat_id:id},
//     headers: {
//       "content-type": "application/json",
//     },
//   }

// axios(OPTIONS).then(res=>console.log(res)).catch(err=>console.log(err));

//   return {
//       type:DELETE_PASSCAT,
//       payload:id,
//   }
// }