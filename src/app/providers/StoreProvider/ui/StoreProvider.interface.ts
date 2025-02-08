import { ReactNode } from 'react';
import { IAppStateSchema } from 'shared/config/appStore';

export interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: IAppStateSchema;
}
