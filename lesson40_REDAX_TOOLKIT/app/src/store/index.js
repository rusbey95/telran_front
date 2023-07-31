import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/TodoSlice';

import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore(
    {
        reducer: {
            todo: todoReducer,
        },
    },
    composeWithDevTools()
)