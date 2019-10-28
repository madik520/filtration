export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProduct = (id, text, img, price ) =>({
    type: ADD_PRODUCT,
    id,
    text,
    img,
    price
});
export const removeProduct = id =>({
    type: REMOVE_PRODUCT,
    id
});