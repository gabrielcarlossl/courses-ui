import { configureStore } from '@reduxjs/toolkit'
import CoursesSlice from './slices/CoursesSlice'


export const store = configureStore({
  reducer: {
    CoursesSlice
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
