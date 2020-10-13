import { SeverityType } from 'src/utils/constants';

export enum SnackbarTypes {
  SET_SUCCESS_NOTIFICATION = 'SET_SUCCESS_NOTIFICATION',
  SET_ERROR_NOTIFICATION = 'SET_ERROR_NOTIFICATION',
  CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION',
}

export interface SnackbarState {
  message: string | undefined | null;
  severity: SeverityType;
}
