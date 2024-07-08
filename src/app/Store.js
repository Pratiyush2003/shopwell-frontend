import {configureStore} from '@reduxjs/toolkit';
import allAppQuery from './getuserSlice.js';
export const Store = configureStore({
    reducer : {
        app : allAppQuery
    }
})