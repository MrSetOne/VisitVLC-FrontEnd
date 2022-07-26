import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import evaluationService from './evaluationService'

const initialState = {
    evaluation: []
}

export const createEvaluation = createAsyncThunk('/evaluations/RouteId', async(data, thunkAPI) => {
    try {
        return await evaluationService.createEvaluation(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const evaluationSlice = createSlice({
    name: "evaluation",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createEvaluation.fulfilled, (state, action) => {
                state.evaluation = action.payload
            })
    },
})

export default evaluationSlice.reducer