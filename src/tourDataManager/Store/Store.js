import { configureStore } from '@reduxjs/toolkit'
import tourReducer from '../TourSlice/TourSlice'
import bookedTourReducer from '../BookedTour/BookedTourSlice'


export default configureStore({
    reducer: {
        tours: tourReducer,
        bookedTours: bookedTourReducer
    }
})