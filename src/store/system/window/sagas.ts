import { all, takeLatest, delay, put, select } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { windowSelectors, windowActions } from 'store/domain/window';
import * as constants from './constants';
import { domainHelper } from 'helpers';

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

function* startOpenSaga(action: ActionType<typeof actions.startOpenWindow>) {
  try {
    const { systemItemId } = action.payload;
    let window: System.Window | null = yield select(windowSelectors.systemItemWindow, { systemItemId });
    let zIndex: number = yield select(windowSelectors.highestZIndex);
    if (!window) {
      const windowId = domainHelper.getUniqueString();
      window = {
        zIndex,
        id: windowId,
        dimensions: { height: 200, width: 200 },
        position: { x: 300, y: 300 },
        systemItemId: action.payload.systemItemId,
      };
      yield put(windowActions.add({ window }));
    }
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
