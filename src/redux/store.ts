import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { uiReducer, itemsReducer } from './reducers';
import thunk from 'redux-thunk';
import { AppState } from './types';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers<AppState>({
    ui: uiReducer,
    items: itemsReducer
})

export const store = createStore(
    combinedReducers,
    composeEnhancers(applyMiddleware(thunk))
  );