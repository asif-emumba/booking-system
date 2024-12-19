import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bookings: JSON.parse(localStorage.getItem('bookedTours')) || [],
};

export const bookedTourSlice = createSlice({
    name: 'bookedTours',
    initialState,
    reducers: {
        addBooking: (state, action) => {
            state.bookings.push(action.payload);
            localStorage.setItem('bookedTours', JSON.stringify(state.bookings));
        },
        updateBooking: (state, action) => {
            const { id, updatedDetails } = action.payload;
            const index = state.bookings.findIndex((booking) => booking.id === id);
            if (index !== -1) {
                console.log("Updating booking at index:", index);
                state.bookings[index] = { ...state.bookings[index], ...updatedDetails };
                console.log("Updated booking:", state.bookings[index]);
                localStorage.setItem('bookedTours', JSON.stringify(state.bookings));
            }
        },
        deleteBooking: (state, action) => {
            const id = action.payload;
            state.bookings = state.bookings.filter((booking) => booking.id !== id);
            localStorage.setItem('bookedTours', JSON.stringify(state.bookings)); // Update local storage
        },
    },
});

export const { addBooking, updateBooking, deleteBooking } = bookedTourSlice.actions;
export default bookedTourSlice.reducer;
