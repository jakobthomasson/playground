import { Channel } from 'redux-saga';
import { all, call, put, select, spawn, take, takeLatest, delay } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { exampleConstants } from 'store/example';
export function* startSaga() {
  try {
    yield delay(100);
  } catch (error) {}
}

export function* watcher() {
  yield all([takeLatest(exampleConstants.START, startSaga)]);
}
