import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RooteAction = { type: string; payload: any };
  
export default store;