import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                interRegular: ['Inter-Regular', 'sans-serif'],
                interMedium: ['Inter-Medium', 'sans-serif'],
                interSemiBold: ['Inter-SemiBold', 'sans-serif'],
                interBold: ['Inter-Bold', 'sans-serif'],
                interExtraBold: ['Inter-ExtraBold', 'sans-serif'],
                montserratRegular: ['Montserrat-Regular', 'sans-serif'],
                montserratMedium: ['Montserrat-Medium', 'sans-serif'],
                montserratSemiBold: ['Montserrat-SemiBold', 'sans-serif'],
                montserratBold: ['Montserrat-Bold', 'sans-serif'],
              }
        },
    },

    plugins: [forms],
};
