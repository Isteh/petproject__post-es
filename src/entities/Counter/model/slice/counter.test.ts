import { counterActions, counterReducer } from './counterSlice';
import { ICounterSchema } from '../types/counter.interface';

describe('counterSlice', () => {
  test('increment', () => {
    const state: ICounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });
  test('decrement', () => {
    const state: ICounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });
  test('initValue', () => {
    const state: ICounterSchema = undefined;
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
