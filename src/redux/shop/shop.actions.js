import ShopActionsTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSucess = collectionsMap => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCESSS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');

    dispatch(fetchCollectionsStart())

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSucess(collectionsMap));      
    }).catch(error => dispatch(fetchCollectionsFailure(error)));
  }
};

