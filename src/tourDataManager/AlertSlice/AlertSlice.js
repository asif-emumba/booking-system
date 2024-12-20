import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    message: '',
    buttons: { confirm: 'Confirm', cancel: 'Cancel' },
    onConfirm: null,
};

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (state, action) => {
            const { message, buttons, onConfirm } = action.payload;
            state.isOpen = true;
            state.message = message;
            state.buttons = buttons || { confirm: 'Confirm', cancel: 'Cancel' };
            state.onConfirm = onConfirm || null;
        },
        hideAlert: (state) => {
            state.isOpen = false;
            state.message = '';
            state.buttons = { confirm: 'Confirm', cancel: 'Cancel' };
            state.onConfirm = null;
        },
    },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
