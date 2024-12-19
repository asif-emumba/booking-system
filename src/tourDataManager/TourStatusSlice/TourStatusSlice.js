import { createSlice } from '@reduxjs/toolkit';

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
export default bookingSlice.reducer;
