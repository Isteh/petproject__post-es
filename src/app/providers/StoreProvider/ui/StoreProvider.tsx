import { createReduxStore } from 'shared/config/appStore';
import { IStoreProviderProps } from './StoreProvider.interface';
import { Provider } from 'react-redux';
export const StoreProvider = ({
  children,
  initialState,
}: IStoreProviderProps) => {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};
