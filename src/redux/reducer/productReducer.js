import {
    ADD_PRODUCT,
    FETCH_PRODUCT, 
    EDIT_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from '../action/product/productType';

const initialState={
    location: '',
    category: '',
    item: '',
    description: '',
    price: '',
    action:'Add',
    id:'',
    msg:''
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT: return { 
            ...state,
            location: action.payload
        }
        case FETCH_PRODUCT:return{
            ...state,
            description: action.payload
        }
        case EDIT_PRODUCT:return{
            ...state,
            category: action.payload,
            id: action.id,
            action:'Edit'
        }
        case UPDATE_PRODUCT:return{
            ...state,
            category:action.payload,
            msg:"Category Updated Successfully"
        }
        case DELETE_PRODUCT:return{
            ...state,
            action:'Add',
            msg:"Category Deleted Successfully"
        }
        default: return state;
    }
}

export default productReducer;