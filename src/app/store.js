import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice'
import routes from '../features/Routes/RoutesSlice'

export const store = configureStore({
    reducer: {
        auth,
        routes
    },
});