import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../index.ts";

interface CustomizationState {
    count: number;
}

export const initialState: CustomizationState = {
    count: 0,
};

export const increaseCounter = createAsyncThunk(
    'customization/logSomething',
    async (_, { dispatch }) => {
        // Simulate an asynchronous operation (e.g., fetching data)
        dispatch(setCount(1))
    }
);

export const customizationSlice = createSlice({
    name: 'customization',
    initialState,
    reducers: {

        setCount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        }

    },
});

export const selectCount = (state: RootState) => state.customization.count;

export const {  setCount } = customizationSlice.actions;

export default customizationSlice.reducer;
