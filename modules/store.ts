'use client'

import storage from "./storage";
import { persistReducer,persistStore } from 'redux-persist'
import { createStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from './slice'

const rootReducer = combineReducers({
    counter: counterReducer
})


const persistConfig = {
    key: 'root',
    storage, 
}

const presistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(presistedReducer)

export const persistor = persistStore(store)