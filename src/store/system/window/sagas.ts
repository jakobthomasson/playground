import { all, takeLatest, delay, put, select } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { windowSelectors, windowActions } from 'store/domain/window';
import { uiActions } from 'store/ui';
import { systemConstants, systemActions, systemSelectors } from 'store/system';
import { size } from 'variables';
import { domainHelper } from 'helpers';
import * as R from 'remeda';

function* startCloseSaga(action: ActionType<typeof systemActions.startCloseWindow>) {
  try {
    yield delay(100);
    const { windowId } = action.payload;
    yield put(uiActions.hideWindow({ windowId }));
    yield put(windowActions.remove({ windowId }));
  } catch (error) {
    console.error('error: ', error);
  }
}

function* startMinimizeSaga(action: ActionType<typeof systemActions.startMinimizeWindow>) {
  try {
    const { windowId } = action.payload;
    yield put(uiActions.hideWindow({ windowId }));
  } catch (error) {
    console.error('error: ', error);
  }
}

function* startOpenSaga(action: ActionType<typeof systemActions.startOpenWindow>) {
  try {
    const { systemItemId } = action.payload;
    let window: System.Window | null = yield select(windowSelectors.systemItemWindow, { systemItemId });

    if (!window) {
      const selectedWindow: System.Window = yield select(systemSelectors.selectedWindow);
      const selectedPosition = R.pathOr(selectedWindow, ['position'], {
        x: 150,
        y: 150,
      }) as System.Coordinates;
      
      const windowId = domainHelper.getUniqueString();
      window = {
        id: windowId,
        dimensions: { height: 400, width: 500 },
        position: {
          x: selectedPosition.x + size.window_titlebar_height,
          y: selectedPosition.y + size.window_titlebar_height,
        },
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
function* startSelectSaga(action: ActionType<typeof systemActions.startSelectWindow>) {
  try {
    const { windowId } = action.payload;
    yield put(uiActions.showWindow({ windowId }));
  } catch (error) {
    console.error('error: ', error);
  }
}
export default function* watcher() {
  yield all([
    takeLatest(systemConstants.START_CLOSE_WINDOW, startCloseSaga),
    takeLatest(systemConstants.START_MINIMIZE_WINDOW, startMinimizeSaga),
    takeLatest(systemConstants.START_OPEN_WINDOW, startOpenSaga),
    takeLatest(systemConstants.START_RESIZE_WINDOW, startResizeSaga),
    takeLatest(systemConstants.START_SELECT_WINDOW, startSelectSaga),
  ]);
}
