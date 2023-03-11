import React, { useEffect } from 'react';
import styles from './../styles/layout.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { switchDark, switchLight } from './themeSwitcherSlice';
import { selectIcon, selectTheme, selectImgs } from './themeSwitcherSlice';

export const Layout = function () {
    const mediaMatch = window.matchMedia('(min-width: 400px)');
    const [matches, setMatches] = React.useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addEventListener('change', handler);
        return () => mediaMatch.removeEventListener('change', handler);
    });

    const icon = useSelector(selectIcon);
    const theme = useSelector(selectTheme);
    const imgs = useSelector(selectImgs);
    const dispatch = useDispatch();

    const handleClick = () => {
        switch (theme) {
            case 'dark':
                dispatch(switchLight());
                break;
            case 'light':
                dispatch(switchDark());
                break;
            default:
                return undefined;
        }
    };

    return (
        <header
            className={styles.header}
            style={{
                backgroundImage: `url(${matches ? imgs.desk : imgs.mob})`,
            }}
        >
            <div className={styles.box}>
                <p className={styles.logo}>todo</p>
                <img
                    className={styles.themeIcon}
                    src={icon}
                    alt=""
                    onClick={handleClick}
                />
            </div>
        </header>
    );
};
