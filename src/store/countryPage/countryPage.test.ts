import { initialState } from './state';
import * as actions from './actions';
import countryReducer from './reducer';
import data from '../../data/dataBack';

describe('CountryPage state tests', () => {
  test('Country data must be added', () => {
    const action = actions.setData(data.countries[0]);
    const newState = countryReducer(initialState, action);

    expect(newState.countryData.id).toBe(1);
    expect(newState.countryData.name['ru']).toBe('Россия');
  });

  test('Must be added correct country data', () => {
    const action = actions.setData(data.countries[1]);
    const newState = countryReducer(initialState, action);

    expect(newState.countryData.id).toBe(2);
    expect(newState.countryData.capital['en']).toBe('Minsk');
  });
});
