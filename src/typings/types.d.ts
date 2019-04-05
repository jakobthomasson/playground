import rootReducer from 'store/root-reducer';
import { StateType } from 'typesafe-actions';
import { ExampleAction } from 'store/example';
import { WindowAction } from 'store/window';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = ExampleAction | WindowAction;
}
