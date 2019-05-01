import { all, spawn } from 'redux-saga/effects';
import { systemSagas } from 'store/system';

export function* rootSaga() {
  return yield all([spawn(systemSagas.watcher)]);
}
