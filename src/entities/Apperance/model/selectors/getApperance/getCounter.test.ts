import { DeepPartial } from 'shared/types/DeepPartial';
import { getApperance } from './getApperance';
import { IAppStateSchema } from 'shared/config/appStore';

describe('getApperance', () => {
  test('return apperance state', () => {
    const state: DeepPartial<IAppStateSchema> = {
      apperance: { isSidebarCollapsed: false },
    };
    expect(getApperance(state as IAppStateSchema)).toEqual({
      isSidebarCollapsed: false,
    });
  });
});
