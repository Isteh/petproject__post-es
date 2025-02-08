import { createSlice } from '@reduxjs/toolkit';
import { IApperanceSchema } from '../types/apperance.interface';

enum APPERANCE_LOCAL_STORAGE_KEYS {
  IS_SIDEBAR_COLLAPSED = 'isSidebarCollapsed',
}

const isSidebarCollapsedLS = localStorage.getItem(
  APPERANCE_LOCAL_STORAGE_KEYS.IS_SIDEBAR_COLLAPSED
);

const initialState: IApperanceSchema = {
  isSidebarCollapsed:
    isSidebarCollapsedLS && isSidebarCollapsedLS === 'true' ? true : false,
};

export const apperanceSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    sidebarCollapsedToggle: (state) => {
      const newValue = !state.isSidebarCollapsed;
      state.isSidebarCollapsed = newValue;
      localStorage.setItem(
        APPERANCE_LOCAL_STORAGE_KEYS.IS_SIDEBAR_COLLAPSED,
        newValue.toString()
      );
    },
  },
});

export const { actions: apperanceActions } = apperanceSlice;
export const { reducer: apperanceReducer } = apperanceSlice;
