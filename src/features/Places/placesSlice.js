import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import placesService from './placesService'


const initialState = {
    allPlaces: [],
    isLoadingAllPlaces: true,
}

export const getAllPlaces = createAsyncThunk('places/getAllPlaces', async(thunkAPI) => {
    try {
        return await placesService.getAllPlaces()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const placesSlice = createSlice({
    name: "places",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllPlaces.pending, (state, action) => {
                state.isLoadingAllPlaces = true
            })
            .addCase(getAllPlaces.fulfilled, (state, action) => {
                state.isLoadingAllPlaces = false
                state.allRoutes = action.payload.routesWithEvaluation
            })
            .addCase(getAllPlaces.rejected, (state, action) => {
                state.isLoadingAllPlaces = false
            })
    },
})

export default placesSlice.reducer