import { all, call, put, select, spawn, take, takeLatest, delay } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import * as constants from './constants';
import { systemItemActions } from 'store/domain/systemItem';
import { pathActions, pathSelectors } from 'store/domain/path';
import * as R from 'remeda';

function* startCreateSystemItemSaga(action: ActionType<typeof actions.startCreateSystemItem>) {
  try {
    const {
      payload: { contextPathId },
    } = action;
    const parentPath: System.Path = yield select(pathSelectors.path, { id: contextPathId });

    const timestamp = new Date().getTime().toString();
    const fileId = `file-${timestamp}`;
    const pathId = `path-${timestamp}`;
    const pathName = `Path ${timestamp}`;

    const file: System.File = {
      id: fileId,
      type: 'file',
      pathId,
    };

    const path: System.Path = {
      id: pathId,
      name: pathName,
      systemItemIds: [fileId],
      parentPathId: action.payload.contextPathId,
    };

    yield put(systemItemActions.add({ systemItem: file }));
    yield put(pathActions.add({ path }));

    yield put(
      pathActions.update({
        partialPath: { id: contextPathId, systemItemIds: R.concat(parentPath.systemItemIds, [file.id]) },
      }),
    );

    yield delay(100);
  } catch (error) {
    console.error('error: ', error);
  }
}

export default function* watcher() {
  yield all([takeLatest(constants.START_CREATE_SYSTEM_ITEM, startCreateSystemItemSaga)]);
}
