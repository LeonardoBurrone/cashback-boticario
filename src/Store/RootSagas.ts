import { all } from 'redux-saga/effects';

import { loginSagas } from '../Ducks/Login/sagas';

export default function* rootSagas() {
  yield all([loginSagas]);
}
