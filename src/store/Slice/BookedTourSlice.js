import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
    bookings: JSON.parse(localStorage.getItem('bookedTours')) || [],
};
const updateLocalStorage = (bookings) => {
    localStorage.setItem('bookedTours', JSON.stringify(bookings));
};

export const bookedTourSlice = createSlice({
    name: 'bookedTours',
    initialState,
    reducers: {
        addBooking: (state, action) => {
            state.bookings.push(action.payload);
            updateLocalStorage(state.bookings)
        },
        updateBooking: (state, action) => {
            const { id, updatedDetails } = action.payload;
            const index = state.bookings.findIndex((booking) => booking.id === id);
            if (index !== -1) {
                console.log("Updating booking at index:", index);
                state.bookings[index] = { ...state.bookings[index], ...updatedDetails };
                console.log("Updated booking:", state.bookings[index]);
                updateLocalStorage(state.bookings)
            }
        },
        deleteBooking: (state, action) => {
            const id = action.payload;
            state.bookings = state.bookings.filter((booking) => booking.id !== id);
            updateLocalStorage(state.bookings)
        },
    },
});

export const { addBooking, updateBooking, deleteBooking } = bookedTourSlice.actions;
export const useSelectBookedTours = () => useSelector(state => state.bookedTours.bookings);
export default bookedTourSlice.reducer;
