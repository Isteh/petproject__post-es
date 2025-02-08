import {
  apperanceActions,
  apperanceReducer,
} from './model/slice/apperanceSlice';
import { IApperanceSchema } from './model/types/apperance.interface';
import { getApperanceIsSidebarCollapsed } from './model/selectors/getApperanceIsSidebarCollapsed/getApperanceIsSidebarCollapsed';
import { getApperance } from './model/selectors/getApperance/getApperance';

export {
  IApperanceSchema,
  apperanceActions,
  apperanceReducer,
  getApperance,
  getApperanceIsSidebarCollapsed,
};
