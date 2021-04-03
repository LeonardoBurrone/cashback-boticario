import { all } from 'redux-saga/effects';

import { dashboardSagas } from '../Ducks/Dashboard/sagas';
import { loginSagas } from '../Ducks/Login/sagas';
import { signUpSagas } from '../Ducks/SignUp/Sagas';

export default function* rootSagas() {
  yield all([dashboardSagas, loginSagas, signUpSagas]);
}
