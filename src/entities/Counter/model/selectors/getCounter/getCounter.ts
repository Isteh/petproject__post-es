import { IAppStateSchema } from 'shared/config/appStore';

export const getCounter = (state: IAppStateSchema) => state.counter;
