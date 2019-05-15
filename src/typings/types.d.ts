import rootReducer from 'store/root-reducer';
import { StateType } from 'typesafe-actions';
import { WindowAction } from 'store/domain/window';
import { PathAction } from 'store/domain/path';
import { SystemItemAction } from 'store/domain/systemItem';
import { SystemAction } from 'store/system';
import { UiAction } from 'store/ui';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = PathAction | WindowAction | SystemItemAction | SystemAction | UiAction;
}
