import { all, takeLatest, delay } from 'redux-saga/effects';
// import { ActionType } from 'typesafe-actions';
// import * as actions from './actions';
import * as constants from './constants';

function* startCloseSaga() {
  try {
    yield delay(100);
  } catch (error) {
    console.error('error: ', error);
  }
}

function* startMinimizeSaga() {
  try {
    yield delay(100);
  } catch (error) {
    console.error('error: ', error);
  }
}
function* startOpenSaga() {
  try {
    yield delay(100);
  } catch (error) {
    console.error('error: ', error);
  }
}
function* startResizeSaga() {
  try {
    yield delay(100);
  } catch (error) {
    console.error('error: ', error);
  }
}
function* startSelectSaga() {
  try {
    yield delay(100);
  } catch (error) {
    console.error('error: ', error);
  }
}
export default function* watcher() {
  yield all([
    takeLatest(constants.START_CLOSE_WINDOW, startCloseSaga),
    takeLatest(constants.START_MINIMIZE_WINDOW, startMinimizeSaga),
    takeLatest(constants.START_OPEN_WINDOW, startOpenSaga),
    takeLatest(constants.START_RESIZE_WINDOW, startResizeSaga),
    takeLatest(constants.START_SELECT_WINDOW, startSelectSaga),
  ]);
}
