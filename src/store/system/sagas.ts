import { all, call, put, select, spawn, take, takeLatest, delay } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { systemActions, systemConstants } from './';
import { systemItemActions } from 'store/systemItem';

import { pathActions, pathConstants, pathSelectors } from 'store/path';
import * as R from 'remeda';

function* startCreateSaga(action: ActionType<typeof systemActions.startCreateSystemItem>) {
  try {
    const {
      payload: { parentPathId },
    } = action;
    const parentPath: System.Path = yield select(pathSelectors.path, { id: parentPathId });

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
      parentPathId: action.payload.parentPathId,
    };

    yield put(systemItemActions.add({ systemItem: file }));
    yield put(pathActions.add({ path }));

    yield put(
      pathActions.update({
        partialPath: { id: parentPathId, systemItemIds: R.concat(parentPath.systemItemIds, [file.id]) },
      }),
    );

    yield delay(100);
  } catch (error) {
    console.error('error: ', error);
  }
}

export function* watcher() {
  yield all([takeLatest(systemConstants.START_CREATE_SYSTEM_ITEM, startCreateSaga)]);
}
