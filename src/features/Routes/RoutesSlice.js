import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import routesService from './routesService'


const initialState = {
    routes: []
}

export const getAllRoutes = createAsyncThunk('routes/getAllRoutes', async(thunkAPI) => {
    try {
        return await routesService.getAllRoutes()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const routesSlice = createSlice({
    name: "routes",
    initialState,
    reducers: {

        //  * EJEMPLO DE REDUCER

        // addLike: (state, action) => {
        //     state.user.likedPosts.push(action.payload)
        // },
    },
    extraReducers: (builder) => {
        // * EJEMPLO DE EXTRA REDUCER CON CICLO DE VIDA COMPLETO


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

export default routesSlice.reducer