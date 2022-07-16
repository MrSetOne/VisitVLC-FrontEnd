import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'


const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
    user: user ? user : null,
    token: token ? token : null,
    isLoading: false,
    isSucces: false,
    isError: false,
    notification: ""
}

export const logIn = createAsyncThunk('auth/login', async(data, thunkAPI) => {
    try {
        return await authService.login(data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const signUp = createAsyncThunk('auth/signup', async(data, thunkAPI) => {
    try {
        console.log(data)
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
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.notification = action.payload.message;
                state.isSucces = true;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.notification = action.payload.message;
            })
    },
})

export const { resetNotifications } = authSlice.actions;

export default authSlice.reducer