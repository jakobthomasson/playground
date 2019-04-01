import { all, spawn } from 'redux-saga/effects';
import { exampleSagas } from 'store/example';

// export function* rootSaga() {
//   yield spawn(userSagas.authWatcher);
// }

export function* rootSaga() {
  return yield all([spawn(exampleSagas.watcher)]);
}
