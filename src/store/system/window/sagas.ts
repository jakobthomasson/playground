import { all, call, put, select, spawn, take, takeLatest, delay } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import * as constants from './constants';

import * as R from 'remeda';

function* startCloseSaga(action: ActionType<typeof actions.startCloseWindow>) {
  try {
    yield delay(100);
  } catch (error) {
    console.error('error: ', error);
  }
}

function* startMinimizeSaga(action: ActionType<typeof actions.startMinimizeWindow>) {
  try {
    yield delay(100);
  } catch (error) {
    console.error('error: ', error);
  }
}
function* startOpenSaga(action: ActionType<typeof actions.startOpenWindow>) {
  try {
    yield delay(100);
  } catch (error) {
    console.error('error: ', error);
  }
}
function* startResizeSaga(action: ActionType<typeof actions.startResizeWindow>) {
  try {
    yield delay(100);
  } catch (error) {
    console.error('error: ', error);
  }
}
function* startSelectSaga(action: ActionType<typeof actions.startSelectWindow>) {
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
