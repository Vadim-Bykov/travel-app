import { requestSettingUserData } from './operations';
import * as actions from './actions';

const data = {
  userName: 'Vadim',
  email: 'test@mail.ru',
  password: '012345',
};

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
});

test('Auth test thunk', () => {
  const thunk = requestSettingUserData(data);

  thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(1);
});

test('Auth test thunk', () => {
  const thunk = requestSettingUserData(data);

  thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toHaveBeenCalledWith(actions.setUserData(data));
});
