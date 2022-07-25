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
    reducers: {


        // addLike: (state, action) => {
        //     state.user.likedPosts.push(action.payload)
        // },
    },
    extraReducers: (builder) => {
        // * EJEMPLO DE EXTRA REDUCER CON CICLO DE VIDA COMPLETO

        builder
            .addCase(createEvaluation.fulfilled, (state, action) => {
                state.evaluation = action.payload
            })
            // builder
            // .addCase(getById.pending, (state) => {
            //     state.isLoading = true
            // })
            // .addCase(getById.fulfilled, (state, action) => {
            //     state.userDisplayed = action.payload.foundUser
            //     state.isLoading = false
            // })
            // .addCase(getById.rejected, (state, action) => {
            //     state.loadingFailed = true
            // })
    },
})

// export const { setPreload } = routesSlice.actions;

export default evaluationSlice.reducer