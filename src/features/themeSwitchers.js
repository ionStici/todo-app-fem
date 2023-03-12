const root = document.documentElement;

// // // // // // // // // //

export const toggleDark = () => {
    root.style.setProperty(
        '--color-darkBlue---lightGray',
        'hsl(235, 21%, 11%)'
    );

    root.style.setProperty('--color-box-bg', 'hsla(235, 24%, 19%, 1)');

    root.style.setProperty(
        '--color-veryLightGrayBlue---veryDarkGrayBlue',
        'hsl(237, 14%, 26%)'
    );

    root.style.setProperty(
        '--color-lightGrayBlue---darkGrayBlue',
        'hsl(234, 11%, 52%)'
    );

    root.style.setProperty('--color-text', 'hsl(234, 39%, 85%)');

    root.style.setProperty(
        '--box-shadow-main',
        '0px 35px 50px -15px rgba(0, 0, 0, 0.5)'
    );
};

// // // // // // // // // //

export const toggleLight = () => {
    root.style.setProperty(
        '--color-darkBlue---lightGray',
        'hsla(0, 0%, 98%, 1)'
    );

    root.style.setProperty('--color-box-bg', 'hsla(0, 0%, 100%, 1)');

    root.style.setProperty(
        '--color-veryLightGrayBlue---veryDarkGrayBlue',
        'hsl(236, 33%, 92%)'
    );

    root.style.setProperty(
        '--color-lightGrayBlue---darkGrayBlue',
        'hsl(236, 9%, 61%)'
    );

    root.style.setProperty('--color-text', 'hsl(235, 19%, 35%)');

    root.style.setProperty(
        '--box-shadow-main',
        '0px 35px 50px -15px rgba(194, 195, 214, 0.5)'
    );
};
// Light Grayish Blue: hsl(234, 39%, 85%) dark
// Very Dark Grayish Blue: hsl(235, 19%, 35%) light

// // // // // // // // // //
// -   Very Light Gray: hsl(0, 0%, 98%)  // -   Very Dark Blue: hsl(235, 21%, 11%)

// ### Light Theme

// -   Very Light Grayish Blue: hsl(236, 33%, 92%)

// -   Light Grayish Blue: hsl(233, 11%, 84%)
// -   Dark Grayish Blue: hsl(236, 9%, 61%)
// -   Very Dark Grayish Blue: hsl(235, 19%, 35%)

// ### Dark Theme

// -   Very Dark Desaturated Blue: hsl(235, 24%, 19%)
// -   Light Grayish Blue: hsl(234, 39%, 85%)
// -   Light Grayish Blue (hover): hsl(236, 33%, 92%)
// -   Dark Grayish Blue: hsl(234, 11%, 52%)
// -   Very Dark Grayish Blue: hsl(233, 14%, 35%)

// -   Very Dark Grayish Blue: hsl(237, 14%, 26%)
