import * as yup from 'yup';

const bookingSchema = yup.object().shape({
    userName: yup
        .string()
        .required('Name is required')
        .min(5, 'Name must be at least 5 characters')
        .max(50, 'Name must be under 50 characters'),
    email: yup
        .string()
        .required('Email is required')
        .email('Please enter a valid email address'),
    numberOfAudults: yup
        .number()
        .typeError('Please enter a valid number')
        .required('One Adult is required')
        .min(1, 'At least one Adult is required')
        .max(100, 'Adults must not exceed 100'),
    numberOfChildrens: yup
        .number()
        .typeError('Please enter a valid number')
        .min(0, 'Numbers must not be negative')
        .max(100, 'Children must not exceed 100'),
    phoneNumber: yup
        .string()
        .required('Phone number is required')
        .matches(/^\d{11}$/, 'Phone number must be 11 digits'),
    selectedPaymentMethod: yup
        .string()
        .required('Please select a payment method')
        .notOneOf(['Select'], 'Please select a valid payment method'),
});
export default bookingSchema;