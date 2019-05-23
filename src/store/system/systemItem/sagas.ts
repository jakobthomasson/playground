import { all, put, select, takeLatest, delay } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import * as constants from './constants';
import { pathActions, pathSelectors } from 'store/domain/path';
import { mockHelper } from 'helpers';
import { uiActions } from 'store/ui';
import * as R from 'remeda';

function* startCreateSystemItemSaga(action: ActionType<typeof actions.startCreateSystemItem>) {
  try {
    yield delay(100);
    const {
      payload: { parentPathId, type },
    } = action;

    let path: System.Path | null = null;
    const id = mockHelper.getUniqueString();
    const name: string = yield select(pathSelectors.newPathName, { parentPathId, type });
    
    switch (type) {
      case 'file':
        path = { id, type, name, parentId: parentPathId, icon: 'file' } as System.FilePath;
        break;
      case 'folder':
        path = { id, type, name, parentId: parentPathId, icon: 'folder', childIds: [] } as System.FolderPath;

        break;
      case 'location':
        path = { id, type, name, parentId: parentPathId, icon: 'placeholder', childIds: [] } as System.LocationPath;

        break;
      case 'program':
        path = { id, type, name, parentId: parentPathId, icon: 'maximize' } as System.ProgramPath;
        break;
      default:
        path = { id, type, name, parentId: parentPathId, icon: 'maximize' } as System.ProgramPath;
    }

    yield put(pathActions.add({ path }));

    const parentPath: System.ContainerPath = yield select(pathSelectors.containerPath, { pathId: parentPathId });
    yield put(
      pathActions.update({
        partialPath: { id: parentPathId, childIds: R.concat(parentPath.childIds, [path.id]) },
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
}

export default function* watcher() {
  yield all([
    takeLatest(constants.START_CREATE_SYSTEM_ITEM, startCreateSystemItemSaga),
    takeLatest(constants.START_UPDATE_PATH, startUpdatePathSaga),
  ]);
}
