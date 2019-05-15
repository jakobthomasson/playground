import { all, takeLatest, delay, put, select } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { windowSelectors, windowActions } from 'store/domain/window';
import { uiActions } from 'store/ui';
import * as constants from './constants';
import { domainHelper } from 'helpers';

function* startCloseSaga(action: ActionType<typeof actions.startCloseWindow>) {
  try {
    yield delay(100);
    const { windowId } = action.payload;
    yield put(uiActions.hideWindow({ windowId }));
    yield put(windowActions.remove({ windowId }));
  } catch (error) {
    console.error('error: ', error);
  }
}

function* startMinimizeSaga(action: ActionType<typeof actions.startMinimizeWindow>) {
  try {
    const { windowId } = action.payload;
    yield put(uiActions.hideWindow({ windowId }));
  } catch (error) {
    console.error('error: ', error);
  }
}

function* startOpenSaga(action: ActionType<typeof actions.startOpenWindow>) {
  try {
    const { systemItemId } = action.payload;
    let window: System.Window | null = yield select(windowSelectors.systemItemWindow, { systemItemId });

    if (!window) {
      const windowId = domainHelper.getUniqueString();
      window = {
        id: windowId,
        dimension: { height: 400, width: 500 },
        position: { x: 300, y: 300 },
        systemItemId: action.payload.systemItemId,
      };
      yield put(windowActions.add({ window }));
    }

    yield put(uiActions.showWindow({ windowId: window.id }));
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
function* startSelectSaga(action: ActionType<typeof actions.startSelectWindow>) {
  try {
    const { windowId } = action.payload;
    yield put(uiActions.showWindow({ windowId }));
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
