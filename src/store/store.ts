import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import mainReducer from './mainPage/reducer';
import { useDispatch } from 'react-redux';

const rootReducers = combineReducers({
  main: mainReducer,
  form: formReducer,
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

export const useDispatchThunk = () => useDispatch<ThunkDispatch<AppStateType, {}, Action<string>>>();

export default store;
