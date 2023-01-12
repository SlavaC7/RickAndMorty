import {api} from './api';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddlewere =>
    getDefaultMiddlewere().concat(api.middleware),
});
