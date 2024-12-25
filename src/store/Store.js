import { configureStore } from '@reduxjs/toolkit'
import tourReducer from './Slice/TourSlice'
import bookedTourReducer from './Slice/BookedTourSlice'
import bookingReducer from './Slice/TourStatusSlice'

export default configureStore({
    reducer: {
        tours: tourReducer,
        bookedTours: bookedTourReducer,
        bookingStatus: bookingReducer,
    }
})