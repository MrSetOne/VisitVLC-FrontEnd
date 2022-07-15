import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './usersService'


const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
    user: user ? user : null,
    token: token ? token : null,

}

// * EJEMPLO DE FUNCION

// export const getById = createAsyncThunk('users/getById', async(id, thunkAPI) => {
//     try {
//         return await userService.getById(id)
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.response.data)
//     }
// })

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

        //  * EJEMPLO DE REDUCER

        // addLike: (state, action) => {
        //     state.user.likedPosts.push(action.payload)
        // },
    },
    extraReducers: (builder) => {
        builder

        // * EJEMPLO DE EXTRA REDUCER CON CICLO DE VIDA COMPLETO

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

export default usersSlice.reducer