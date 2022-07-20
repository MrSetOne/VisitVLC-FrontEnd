import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice'
import routes from '../features/routes/RoutesSlice'

export const store = configureStore({
    reducer: {
        auth,
        routes
    },
});