import { configureStore } from '@reduxjs/toolkit'
import tourReducer from '../TourSlice/TourSlice'
import bookedTourReducer from '../BookedTour/BookedTourSlice'
import bookingReducer from '../TourStatusSlice/TourStatusSlice'

export default configureStore({
    reducer: {
        tours: tourReducer,
        bookedTours: bookedTourReducer,
        bookingStatus: bookingReducer,

    }
})