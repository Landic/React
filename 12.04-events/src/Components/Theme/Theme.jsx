import React, { useState } from 'react';
import styles from './Theme.module.css';

export default function CustomTheme() {
    const [currentTheme, setCurrentTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setCurrentTheme(newTheme);
        const body = document.querySelector('body');
        if (newTheme === 'light') {
            body.style.backgroundColor = 'rgb(255, 255, 255)';
            body.style.color = 'rgb(0, 0, 0)';
        } else {
            body.style.backgroundColor = 'rgb(30, 30, 30)';
            body.style.color = 'rgb(255, 255, 255)';
        }
    };

    return (
        <>
            <input
                className={styles.button}
                type="button"
                value="Toggle Theme"
                onClick={toggleTheme}
            />
        </>
    );
}
