import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import routesService from './routesService'


const initialState = {
    allRoutes: [],
    highRated: [],
    routeDetail: {},
    isLoadingRouteDetail: true,
    isLoadingAllRoutes: true,
    isLoadingHighRated: true,
    isLoadingFav: false,
    filteredRoutes: [],
    hasRoute: false,
    filterMessage: ""
}

export const getAllRoutes = createAsyncThunk('routes/getAllRoutes', async (thunkAPI) => {
    try {
        return await routesService.getAllRoutes()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const getHighRatedRoutes = createAsyncThunk('routes/getHighRatedRoutes', async (thunkAPI) => {
    try {
        return await routesService.getHighRatedRoutes()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const getRouteByID = createAsyncThunk('routes/getRouteByID', async (id, thunkAPI) => {
    try {
        return await routesService.getRouteByID(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const filterRoute = createAsyncThunk('routes/filterRoute', async (values, thunkAPI) => {
    console.log(values)
    try {
        return await routesService.filterRoute(values)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const favoriteRoute = createAsyncThunk('routes/addToFavorite', async (id, thunkAPI) => {
    try {
        return await routesService.favoriteRoute(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const favoriteRouteOut = createAsyncThunk('routes/favoriteRouteOut', async (id, thunkAPI) => {
    try {
        return await routesService.favoriteRouteOut(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const routesSlice = createSlice({
    name: "routes",
    initialState,
    reducers: {

        resetHasRoute:(state)=>{
            state.hasRoute = false
        }
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
            .addCase(getRouteByID.pending, (state) => {
                state.isLoadingRouteDetail = true
            })
            .addCase(getRouteByID.fulfilled, (state, action) => {
                state.isLoadingRouteDetail = false
                state.routeDetail = { ...action.payload.route, evaluations: action.payload.evaluations, averageScore: action.payload.averageScore }
            })
            .addCase(filterRoute.pending, (state) => {
                state.filteredRoutes = []
            })
            .addCase(filterRoute.fulfilled, (state, action) => {
                state.filteredRoutes = action.payload
            })
            .addCase(filterRoute.rejected, (state, action) => {
                state.filterMessage = action.payload.message
                state.hasRoute = true
            })
            .addCase(favoriteRoute.pending, (state, action) => {
                state.isLoadingFav = true
            })
            .addCase(favoriteRoute.fulfilled, (state, action) => {
                state.isLoadingFav = false
            })
            .addCase(favoriteRouteOut.pending, (state, action) => {
                state.isLoadingFav = true
            })
            .addCase(favoriteRouteOut.fulfilled, (state, action) => {
                state.isLoadingFav = false
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

export const { resetHasRoute } = routesSlice.actions;

export default routesSlice.reducer