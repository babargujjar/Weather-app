import optionSlice from "./../redux/optionSlice"
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    options:optionSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


