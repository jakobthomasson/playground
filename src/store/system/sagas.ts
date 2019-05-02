import { all, spawn } from 'redux-saga/effects';
import windowWatcher from './window/sagas';
import systemItemWatcher from './systemItem/sagas';

export function* watcher() {
  yield all([spawn(windowWatcher), spawn(systemItemWatcher)]);
}
