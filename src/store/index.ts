import { configureStore } from '@reduxjs/toolkit'
import customization from './slices/customization'


export const store = configureStore({
    reducer: {
        customization
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch