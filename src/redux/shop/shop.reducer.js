import ShopActionsTypes from './shop.types';

const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, actions) => {
  switch(actions.type) {
    case ShopActionsTypes.UPDATE_COLLECTIONS:
      return{
        ...state,
        collections: actions.payload
      }
    default:
      return state;
  }
}

export default shopReducer;