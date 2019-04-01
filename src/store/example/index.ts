import { ActionType } from 'typesafe-actions';
import * as exampleConstants from './constants';
import * as exampleActions from './actions';
import * as exampleSelectors from './selectors';
import * as exampleSagas from './sagas';
import exampleReducer from './reducer';

// export type DocumentAction = ActionType<typeof exampleActions>;

export type ExampleAction = {};
export type ExampleState = {};
// export interface DocumentState {
//   readonly byId: Readonly<Al.Map<Al.Document>>;
//   readonly allIds: ReadonlyArray<string>;
//   readonly selectedId?: string;
// }

export { exampleConstants, exampleActions, exampleReducer, exampleSelectors, exampleSagas };
