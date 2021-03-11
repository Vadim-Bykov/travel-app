import data from '../data/dataBack';
import { UserDataType } from '../store/auth/types';


export const getUserDataAPI = (id: number): UserDataType | {} => data.userData;

export const setUserDataAPI = (userData: UserDataType) =>
  (data.userData = { ...userData });
