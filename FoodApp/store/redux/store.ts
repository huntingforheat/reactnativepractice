import { configureStore } from '@reduxjs/toolkit';
import favoritReducer from './favorites';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
