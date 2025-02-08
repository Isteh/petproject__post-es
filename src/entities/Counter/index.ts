import { counterActions, counterReducer } from './model/slice/counterSlice';
import { ICounterSchema } from './model/types/counter.interface';
import { getCounter } from './model/selectors/getCounter/getCounter';
import { getCounterValue } from './model/selectors/getCounterValue/getCounterValue';

export {
  ICounterSchema,
  counterActions,
  counterReducer,
  getCounter,
  getCounterValue,
};
