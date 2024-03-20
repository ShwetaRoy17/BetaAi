import {configureStore} from '@reduxjs/toolkit';
import fixtureSlice from './fixture-slice.js'

export const store = configureStore({
    reducer:{
        fixture:fixtureSlice.reducer
    },
});
