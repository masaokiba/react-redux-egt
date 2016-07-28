import {Map, List} from 'immutable';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export const initialState = List([]);

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return state.push(Map(action.payload));
    case REMOVE_PRODUCT_FROM_CART:
      return state.filter(product => product.get('productId') !== action.payload.productId);
    default:
      return state;
  }
}

export function addProductToCart({productId, salePrice}) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {
      productId,
      price: salePrice
    }
  };
}

export function removeProductFromCart({productId}) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId
    }
  };
}
