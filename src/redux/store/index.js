import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import AuthReducer from '../reducer/AuthReducer';
import RootSaga from '../saga/RootSaga';
import {logger} from 'redux-logger';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

export default configureStore({
  reducer: {
    AuthReducer: AuthReducer,
  },
  middleware: () => middleware,
});

sagaMiddleware.run(RootSaga);
