import { createSlice } from '@reduxjs/toolkit';

import iconMoon from './../images/icon-moon.svg';
import iconSun from './../images/icon-sun.svg';

import mobDark from './../images/bg-mobile-dark.jpeg';
import mobLight from './../images/bg-mobile-light.jpeg';

import deskDark from './../images/bg-desktop-dark.jpg';
import deskLight from './../images/bg-desktop-light.jpg';

[mobDark, mobLight, deskDark, deskLight].forEach(img => {
    new Image().src = img;
});

const root = document.documentElement;

// // // // // // // // // //

const dark = () => {
    root.style.setProperty(
        '--color-darkBlue---lightGray',
        'hsl(235, 21%, 11%)'
    );

    root.style.setProperty(
        '--box-shadow-main',
        '0px 35px 50px -15px rgba(0, 0, 0, 0.5)'
    );
};

dark();

// // // // // // // // // //

const light = () => {
    root.style.setProperty(
        '--color-darkBlue---lightGray',
        'hsla(0, 0%, 98%, 1)'
    );

    root.style.setProperty(
        '--box-shadow-main',
        '0px 35px 50px -15px rgba(194, 195, 214, 0.5)'
    );
};

// // // // // // // // // //

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'dark',
        icon: iconSun,
        imgs: { mob: mobDark, desk: deskDark },
    },
    reducers: {
        switchDark: (state, action) => {
            dark();
            return {
                theme: 'dark',
                icon: iconSun,
                imgs: { mob: mobDark, desk: deskDark },
            };
        },

        switchLight: (state, action) => {
            light();
            return {
                theme: 'light',
                icon: iconMoon,
                imgs: { mob: mobLight, desk: deskLight },
            };
        },
    },
});

// // // // // // // // // //

export default themeSlice.reducer;
export const { switchDark, switchLight } = themeSlice.actions;

export const selectIcon = state => state.theme.icon;
export const selectTheme = state => state.theme.theme;
export const selectImgs = state => state.theme.imgs;

// console.log(themeSlice);

// // // // // // // // // //
