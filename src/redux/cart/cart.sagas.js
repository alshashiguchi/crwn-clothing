import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.action';

export function* clearCartyOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSucess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartyOnSignOut);
}

export function* cartSagas () {
  yield all([
    call(onSignOutSucess)
  ]);
}