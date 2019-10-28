/* eslint-disable no-unreachable */
import { PRODUCT } from '../productArr';
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/actionCreator';

const product = (state = PRODUCT, { type, id, text, price, img  }) => {
    switch(type){
        case ADD_PRODUCT:
            return [
                ...state,{
                id,
                text,
                price,
                img
            }]
            break;
        case REMOVE_PRODUCT:
            return [...state].filter(n => n.id !== id);
        default:
            return state;
    }
}

export default product;