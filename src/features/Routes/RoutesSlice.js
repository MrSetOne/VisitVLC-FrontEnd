import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import routesService from './routesService'


const initialState = {
    allRoutes: [],
    highRated: [],
    isLoadingAllRoutes: true,
    isLoadingHighRated: true,

}

export const getAllRoutes = createAsyncThunk('routes/getAllRoutes', async(thunkAPI) => {
    try {
        return await routesService.getAllRoutes()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const getHighRatedRoutes = createAsyncThunk('routes/getHighRatedRoutes', async(thunkAPI) => {
    try {
        return await routesService.getHighRatedRoutes()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const routesSlice = createSlice({
    name: "routes",
    initialState,
    reducers: {


        // addLike: (state, action) => {
        //     state.user.likedPosts.push(action.payload)
        // },
    },
    extraReducers: (builder) => {
        // * EJEMPLO DE EXTRA REDUCER CON CICLO DE VIDA COMPLETO

        builder
            .addCase(getAllRoutes.pending, (state, action) => {
                state.isLoadingAllRoutes = true
            })
            .addCase(getAllRoutes.fulfilled, (state, action) => {
                state.isLoadingAllRoutes = false
                state.allRoutes = action.payload.routesWithEvaluation
            })
            .addCase(getAllRoutes.rejected, (state, action) => {
                state.isLoadingAllRoutes = false
            })
            .addCase(getHighRatedRoutes.pending, (state) => {
                state.isLoadingHighRated = true
            })
            .addCase(getHighRatedRoutes.fulfilled, (state, action) => {
                state.highRated = action.payload
                state.isLoadingHighRated = false
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

export default routesSlice.reducer