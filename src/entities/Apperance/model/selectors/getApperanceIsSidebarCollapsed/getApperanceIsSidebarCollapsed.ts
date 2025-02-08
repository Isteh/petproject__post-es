import { createSelector } from '@reduxjs/toolkit';
import { getApperance } from '../getApperance/getApperance';

export const getApperanceIsSidebarCollapsed = createSelector(
  getApperance,
  (apperance) => apperance.isSidebarCollapsed
);
