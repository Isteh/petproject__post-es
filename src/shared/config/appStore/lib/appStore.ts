import { configureStore } from '@reduxjs/toolkit';
import { IAppStateSchema } from './appState.interface';
import { counterReducer } from 'entities/Counter';
import { apperanceReducer } from 'entities/Apperance';

export function createReduxStore(initialState: IAppStateSchema) {
  return configureStore<IAppStateSchema>({
    reducer: { counter: counterReducer, apperance: apperanceReducer },
    devTools: __IS_DEV,
    preloadedState: initialState,
  });
}
