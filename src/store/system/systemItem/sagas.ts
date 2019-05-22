import { all, put, select, takeLatest, delay } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import * as constants from './constants';
import { systemItemActions } from 'store/domain/systemItem';
import { pathActions, pathSelectors } from 'store/domain/path';
import { domainHelper } from 'helpers';
import { uiActions } from 'store/ui';
import * as R from 'remeda';

function* startCreateSystemItemSaga(action: ActionType<typeof actions.startCreateSystemItem>) {
  try {
    const {
      payload: { contextPathId, type },
    } = action;
    const parentPath: System.Path = yield select(pathSelectors.path, { pathId: contextPathId });

    const timestamp = domainHelper.getUniqueString();
    const systemItemId = `file-${timestamp}`;
    const pathId = `path-${timestamp}`;
    const pathName = `Path ${timestamp}`;

    const path: System.Path = {
      id: pathId,
      name: pathName,
      parentId: action.payload.contextPathId,
      childIds: [],
      systemItemId: systemItemId,
    };
    switch (type) {
      case 'file':
        yield put(
          systemItemActions.add({
            systemItem: {
              type,
              id: systemItemId,
            },
          }),
        );
        break;
      case 'folder':
        yield put(
          systemItemActions.add({
            systemItem: {
              type,
              id: systemItemId,
            },
          }),
        );
        break;
    }

    yield put(pathActions.add({ path }));

    yield put(
      pathActions.update({
        partialPath: { id: contextPathId, childIds: R.concat(parentPath.childIds!, [path.id]) },
      }),
    );

    yield put(uiActions.setRenamingPathId({ pathId: path.id }));
  } catch (error) {
    console.error('error: ', error);
  }
}

function* startUpdatePathSaga(action: ActionType<typeof actions.startUpdatePath>) {
  const { partialPath } = action.payload;
  yield put(pathActions.update({ partialPath }));
  yield put(uiActions.setRenamingPathId({ pathId: null }));
  // yield put(uiActions.renameSystemItem());
  // const { app };
}

export default function* watcher() {
  yield all([
    takeLatest(constants.START_CREATE_SYSTEM_ITEM, startCreateSystemItemSaga),
    takeLatest(constants.START_UPDATE_PATH, startUpdatePathSaga),
  ]);
}
