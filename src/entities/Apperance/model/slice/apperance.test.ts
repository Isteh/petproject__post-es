import { apperanceActions, apperanceReducer } from './apperanceSlice';
import { IApperanceSchema } from '../types/apperance.interface';

describe('apperanceSlice', () => {
  test('sidebarCollapsedToggle', () => {
    const state: IApperanceSchema = {
      isSidebarCollapsed: false,
    };
    expect(
      apperanceReducer(state, apperanceActions.sidebarCollapsedToggle())
    ).toEqual({ isSidebarCollapsed: true });
  });
  test('initValue', () => {
    const state: IApperanceSchema = undefined;
    expect(
      apperanceReducer(state, apperanceActions.sidebarCollapsedToggle())
    ).toEqual({ isSidebarCollapsed: true });
  });
});
