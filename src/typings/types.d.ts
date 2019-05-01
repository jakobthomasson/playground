import rootReducer from 'store/root-reducer';
import { StateType } from 'typesafe-actions';
import { WindowAction } from 'store/window';
import { PathAction } from 'store/path';
import { SystemItemAction } from 'store/systemItem';
import { SystemAction } from 'store/system';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = PathAction | WindowAction | SystemItemAction | SystemAction;
}
