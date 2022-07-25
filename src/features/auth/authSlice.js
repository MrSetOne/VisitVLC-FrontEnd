import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'


const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
    user: user ? user : null,
    token: token ? token : null,
    isLoading: false,
    isSucces: false,
    isSuccesLogOut: false,
    isError: false,
    notification: "",
    favoriteRoutes: []
}

export const logIn = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        return await authService.login(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const signUp = createAsyncThunk('auth/signup', async (data, thunkAPI) => {
    try {
        console.log(data)
        return await authService.signUp(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const logOut = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
    try {
        return await authService.logOut()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const getFavoritesRoutes = createAsyncThunk("auth/getFavoritesRoutes", async (thunkAPI) => {
    try {
        return await authService.getFavoritesRoutes()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async (data, thunkAPI) => {
    try {
        return await authService.getCurrentUser()
    } catch (error) {
        console.log(error)
    }
})

export const updateUserData = createAsyncThunk('auth/updateUserData', async (data, thunkAPI) => {
    try {
        return await authService.updateUserData(data)
    } catch (error) {
        console.log(error)
    }
})

export const changeUserPassword = createAsyncThunk('auth/changeUserPassword', async (newPassword, thunkAPI) => {
    try {
        return await authService.changeUserPassword(newPassword)
    } catch (error) {
        console.log(error)
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetNotifications: (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSucces = false;
            state.notification = "";
        },
        addToFav: (state, action) => {
            state.favoriteRoutes.push(action.payload)
        },
        removeToFav: (state, action) => {
            state.favoriteRoutes = state.favoriteRoutes.filter(route => Number(route.route_id) !== Number(action.payload))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = { ...action.payload.user };
                state.token = action.payload.token;
                state.notification = action.payload.message;
                state.isSucces = true;
                state.favoriteRoutes = action.payload.favoriteRoutes
            })
            .addCase(logIn.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.notification = action.payload.message;
            })
            .addCase(signUp.pending, (state) => {
                state.isLoading = true;
                console.log('se intenta')
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSucces = true;
                state.notification = action.payload.message;
                console.log({ msg: 'se completa' }, action.payload)
            })
            .addCase(signUp.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.notification = action.payload.messages[0];
                console.log({ msg: 'se rejecta' }, action.payload)
            })
            .addCase(logOut.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.token = null;
            })
            .addCase(logOut.rejected, (state, action) => {
                console.log(action)
                state.isLoading = false
                state.isError = true
            })
            .addCase(getFavoritesRoutes.fulfilled, (state, action) => {
                state.favoriteRoutes = action.payload
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.favoriteRoutes = action.payload.favoriteRoutes
                state.user = action.payload.user;
            })
            .addCase(getCurrentUser.rejected, (state, action) => {
                state.user = null;
                state.token = null;
                state.favoriteRoutes = []
            })
    },
})

export const { resetNotifications, addToFav, removeToFav } = authSlice.actions;

export default authSlice.reducer