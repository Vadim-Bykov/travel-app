import { Action, applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import mainReducer from './mainPage/reducer';
import { useDispatch } from 'react-redux';
import widgetsReducer from './widgets/reducer';
import authReducer from './auth/reducer';
import countryReducer from './countryPage/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducers = combineReducers({
  main: mainReducer,
  auth: authReducer,
  countryPage: countryReducer,
  form: formReducer,
  widgets: widgetsReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['main', 'auth'],
};

type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistReducer(persistConfig, rootReducers),
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export type AppDispatchType = typeof store.dispatch;
export const useDispatchAction = () => useDispatch<AppDispatchType>();

export const useDispatchThunk = () =>
  useDispatch<ThunkDispatch<AppStateType, {}, Action<string>>>();

export const persistor = persistStore(store);

export default store;
