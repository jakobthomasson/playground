import rootReducer from 'store/root-reducer';
import { StateType } from 'typesafe-actions';
import { ExampleAction } from 'store/example';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = ExampleAction;
}
