import * as thunks from './operations';
import * as actions from './actions';
import data from '../../data/dataBack';

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
});

describe('Main thunk tests', () => {
  test('Thunks requestCountriesData must call dispatch', () => {
    const thunk = thunks.requestCountriesData();

    thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(1);
  });

  test('Dispatch must be called with action setLanguage', () => {
    const thunk = thunks.requestLanguage();

    thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledWith(actions.setLanguage('en'));
  });

  test('Thunks requestLanguage must call dispatch', () => {
    const thunk = thunks.requestLanguage();

    thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(1);
  });

  test('Thunks changeLanguage must call dispatch', () => {
    const thunk = thunks.changeLanguage('ru');

    thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalled();
  });
});
