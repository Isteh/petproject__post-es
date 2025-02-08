import { IApperanceSchema } from 'entities/Apperance';
import { ICounterSchema } from 'entities/Counter';

export interface IAppStateSchema {
  counter: ICounterSchema;
  apperance: IApperanceSchema;
}
