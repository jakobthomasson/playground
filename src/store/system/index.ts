import { ActionType } from 'typesafe-actions';
import * as systemConstants from './constants';
import * as systemActions from './actions';
import * as systemSelectors from './selectors';
import * as systemSagas from './sagas';

export type SystemAction = ActionType<typeof systemActions>;

export { systemConstants, systemActions, systemSelectors, systemSagas };
