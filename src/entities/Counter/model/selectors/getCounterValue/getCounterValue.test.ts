import { DeepPartial } from 'shared/types/DeepPartial';
import { getCounterValue } from './getCounterValue';
import { IAppStateSchema } from 'shared/config/appStore';

describe('getCounterValue', () => {
  test('return counter value', () => {
    const state: DeepPartial<IAppStateSchema> = { counter: { value: 10 } };
    expect(getCounterValue(state as IAppStateSchema)).toEqual(10);
  });
});
