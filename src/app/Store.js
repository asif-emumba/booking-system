import { configureStore } from '@reduxjs/toolkit'
import tourReducer from '../tour/tourSlice.js'

export default configureStore({
    reducer: {
        tours: tourReducer
    }
})