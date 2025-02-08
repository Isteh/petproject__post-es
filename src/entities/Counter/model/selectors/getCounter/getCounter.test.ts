import { DeepPartial } from 'shared/types/DeepPartial';
import { getCounter } from './getCounter';
import { IAppStateSchema } from 'shared/config/appStore';

describe('getCounter', () => {
  test('return counter state', () => {
    const state: DeepPartial<IAppStateSchema> = { counter: { value: 10 } };
    expect(getCounter(state as IAppStateSchema)).toEqual({ value: 10 });
  });
});
