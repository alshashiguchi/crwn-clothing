import ShopActionsTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, actions) => {
  switch(actions.type) {
    case ShopActionsTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case ShopActionsTypes.FETCH_COLLECTIONS_SUCESSS:
      return{
        ...state,
        isFetching: false,
        collections: actions.payload
      }  
    case ShopActionsTypes.FETCH_COLLECTIONS_FAILURE:
      return{
        ...state,
        isFetching: false,
        errorMessage: actions.payload
      }
    default:
      return state;
  }
}

export default shopReducer;