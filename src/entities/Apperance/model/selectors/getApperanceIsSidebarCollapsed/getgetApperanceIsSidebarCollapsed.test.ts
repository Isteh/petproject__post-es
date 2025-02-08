import { DeepPartial } from 'shared/types/DeepPartial';
import { getApperanceIsSidebarCollapsed } from './getApperanceIsSidebarCollapsed';
import { IAppStateSchema } from 'shared/config/appStore';

describe('getApperanceIsSidebarCollapsed', () => {
  test('return apperance is sidebar collapsed', () => {
    const state: DeepPartial<IAppStateSchema> = {
      apperance: { isSidebarCollapsed: false },
    };
    expect(getApperanceIsSidebarCollapsed(state as IAppStateSchema)).toEqual(
      false
    );
  });
});
