import { all } from 'redux-saga/effects';

import { dashboardSagas } from '../Ducks/Dashboard/sagas';
import { loginSagas } from '../Ducks/Login/sagas';

export default function* rootSagas() {
  yield all([dashboardSagas, loginSagas]);
}
