import { createSlice } from '@reduxjs/toolkit'
import { tourDetails } from '../../utils/Tours-data'

export const tourSlice = createSlice({
    name: 'tours',
    initialState: {
        value: tourDetails,
        selectedTour: null,
    },
    reducers: {
        setSelectedTour: (state, action) => {
            state.selectedTour = action.payload;
        },
    },
})

export const { setSelectedTour } = tourSlice.actions;
export default tourSlice.reducer