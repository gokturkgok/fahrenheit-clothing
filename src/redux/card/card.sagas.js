import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user-types';
import { clearCart } from './card.actions';


export function* clearCartOnSignOut(){
    yield put(clearCart());
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cardSagas(){
    yield all([
        call(onSignOutSuccess)
    ]);
}