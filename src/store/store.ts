import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import mainReducer from './mainPage/reducer';
import { useDispatch } from 'react-redux';
import widgetsReducer from './widgets/reducer';
import authReducer from './auth/reducer';
import countryReducer from './countryPage/reducer';

const rootReducers = combineReducers({
  main: mainReducer,
  auth: authReducer,
  countryPage: countryReducer,
  form: formReducer,
  widgets: widgetsReducer
});

type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export type AppDispatchType = typeof store.dispatch;
export const useDispatchAction = () => useDispatch<AppDispatchType>();

export const useDispatchThunk = () =>
  useDispatch<ThunkDispatch<AppStateType, {}, Action<string>>>();

export default store;
