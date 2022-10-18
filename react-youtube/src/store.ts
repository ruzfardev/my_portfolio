import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import defaultVideosReducer from './reducers/videos';
import { rootSaga } from './sagas';
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    videos: defaultVideosReducer,
  },
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);
