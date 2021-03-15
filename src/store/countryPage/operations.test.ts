import { requestCountryData } from './operations';
import * as actions from './actions';
import data from '../../data/dataBack';

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
});

describe('Country page thunk tests', () => {
  test('Dispatch must be called', () => {
    const thunk = requestCountryData('1');

    thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(1);
  });

  test('Dispatch must be called with action', () => {
    const thunk = requestCountryData('3');

    thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toHaveBeenCalledWith(
      actions.setData(data.countries[2])
    );
  });
});
