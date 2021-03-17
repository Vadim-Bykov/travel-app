import * as api from './../../api/authAPI';
import * as actions from './actions';
import { ThunkType, UserDataType } from './types';

export const requestSettingUserData = (data: UserDataType): ThunkType => (dispatch) => {
  api.setUserDataAPI(data);
  api.getUserDataAPI(1);
  dispatch(actions.setUserData(data));
}
