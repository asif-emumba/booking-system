import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const bookingSlice = createSlice({
    name: 'bookingStatus',
    initialState: {
        status: 'unbooked',
    },
    reducers: {
        setBooked: (state) => {
            state.status = 'booked';
        },
        setUnbooked: (state) => {
            state.status = 'unbooked';
        },
    },
});

export const { setBooked, setUnbooked } = bookingSlice.actions;
export const useSelectBookingStatus = () => useSelector(state => state.bookingStatus.status);
export default bookingSlice.reducer;
