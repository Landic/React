import React, { useState } from 'react'
import styles from './Theme.module.css'


export default function Theme() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(!theme);
        const body = document.querySelector('body');
        if (theme) {
            body.style.backgroundColor = 'rgb(255, 255, 255)';
            body.style.color = 'rgb(0, 0, 0)';
        } else {
            body.style.backgroundColor = 'rgb(30, 30, 30)';
            body.style.color = 'rgb(255, 255, 255)';
        }
    };
  return (
    <>
        <input className={styles['butt']} type="button" value="Тема" onClick={toggleTheme} />
    </>
  )
}
