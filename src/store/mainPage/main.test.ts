import { initialState } from './state';
import * as actions from './actions';
import mainReducer from './reducer';
import data from '../../data/dataBack';

describe('Main state tests', () => {
  test('Language should be changed', () => {
    const action = actions.setLanguage('ru');
    const newState = mainReducer(initialState, action);
    expect(newState.curLang).toBe('ru');
  });

  test('Array with countries must be added', () => {
    const action = actions.setCountriesData(data.countries);
    const newState = mainReducer(initialState, action);
    expect(newState.countries.length).toBe(8);
    expect(newState.countries[0].id).toBe(1);
  });
});
