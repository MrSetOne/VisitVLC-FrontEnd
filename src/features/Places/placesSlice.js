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
    reducers: {


        // addLike: (state, action) => {
        //     state.user.likedPosts.push(action.payload)
        // },
    },
    extraReducers: (builder) => {
        // * EJEMPLO DE EXTRA REDUCER CON CICLO DE VIDA COMPLETO

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

export default placesSlice.reducer