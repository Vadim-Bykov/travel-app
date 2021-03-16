import { initialState } from './state';
import * as actions from './actions';
import authReducer from './reducer';

const data = {
  userName: 'Vadim',
  email: 'test@mail.ru',
  password: '012345',
};

describe('Auth state tests', () => {
  test('User data must be added', () => {
    const action = actions.setUserData(data);
    const newState = authReducer(initialState, action);

    expect(newState.userName).toBe('Vadim');
    expect(newState.email).toBe('test@mail.ru');
    expect(newState.password?.includes('3')).toBe(true);
    expect(newState.isAuth).toBeTruthy();
  });

  test('User data must be reset', () => {
    const action = actions.resetUserData();
    const newState = authReducer(initialState, action);

    expect(newState.userName).toBeNull();
    expect(newState.password).toBeNull();
    expect(newState.email).toBeNull();
    expect(newState.isAuth).toBeFalsy();
  });
});
