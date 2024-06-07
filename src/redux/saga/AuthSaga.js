import {put, takeLatest} from 'redux-saga/effects';

import {updateAuthUserType, updateAuthUserStatus} from '../reducer/AuthReducer';

export function* userLoginSaga(action) {
  //
}

export function* userSignUpSaga(action) {
  //
}

const watchFunction = [
  (function* () {
    yield takeLatest('Auth/userLoginRequest', userLoginSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/userSignUpRequest', userSignUpSaga);
  })(),
];

export default watchFunction;
