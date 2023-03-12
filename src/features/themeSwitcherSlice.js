import { createSlice } from '@reduxjs/toolkit';
import { toggleDark, toggleLight } from './themeSwitchers';

import iconMoon from './../images/icon-moon.svg';
import iconSun from './../images/icon-sun.svg';

import mobDark from './../images/bg-mobile-dark.jpeg';
import mobLight from './../images/bg-mobile-light.jpeg';

import deskDark from './../images/bg-desktop-dark.jpg';
import deskLight from './../images/bg-desktop-light.jpg';

[mobDark, mobLight, deskDark, deskLight].forEach(img => {
    new Image().src = img;
});

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
            toggleDark();
            return {
                theme: 'dark',
                icon: iconSun,
                imgs: { mob: mobDark, desk: deskDark },
            };
        },

        switchLight: (state, action) => {
            toggleLight();
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

// // // // // // // // // //

toggleDark();
