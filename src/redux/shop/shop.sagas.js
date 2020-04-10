import { takeLatest, call, put } from 'redux-saga/effects'; 
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';
import { fetchCollectionsSucess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync(){
  yield console.log('I am fired');

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSucess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* onFetchCollectionsStart(){
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START, 
    fetchCollectionsAsync)
}

//call - is the efect inside of our generator function that invokes the method.
//put - saga effect for creating action.