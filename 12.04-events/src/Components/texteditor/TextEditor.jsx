import React, { useState } from 'react';
import styles from './texteditor.module.css';

export default function TextEditor() {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const [size, setSize] = useState('14px');
    const [family, setFamily] = useState('Arial');
    const [color, setColor] = useState('#000000');

    const toggleBold = () => {
        setBold(!bold);
    };

    const toggleItalic = () => {
        setItalic(!italic);
    };

    const toggleUnderline = () => {
        setUnderline(!underline);
    };

    const toggleUppercase = () => {
        setUppercase(!uppercase);
    };

    const onChangeSize = (e) => {
        setSize(e.target.value);
    };

    const onChangeFamily = (e) => {
        setFamily(e.target.value);
    };

    const onChangeColor = (e) => {
        setColor(e.target.value);
    };

    return (
        <>
            <div className={styles.controls}>
                <button className={bold ? styles.active : ''} onClick={toggleBold}>B</button>
                <button className={italic ? styles.active : ''} onClick={toggleItalic}>I</button>
                <button className={underline ? styles.active : ''} onClick={toggleUnderline}>U</button>
                <button className={uppercase ? styles.active : ''} onClick={toggleUppercase}>Tt</button>
                <select name="fontSize" value={size} onChange={onChangeSize}>
                    <option value="12px">12px</option>
                    <option value="14px">14px</option>
                    <option value="16px">16px</option>
                    <option value="20px">20px</option>
                </select>
                <select name="fontFamily" value={family} onChange={onChangeFamily}>
                    <option value="Arial">Arial</option>
                    <option value="Impact">Impact</option>
                    <option value="Times New Roman">Times New Roman</option>
                </select>
                <input type="color" value={color} onChange={onChangeColor} />
            </div>
            <textarea
                className={styles.editor}
                style={{
                    fontWeight: bold ? 'bold' : 'normal',
                    fontStyle: italic ? 'italic' : 'normal',
                    textDecoration: underline ? 'underline' : 'none',
                    textTransform: uppercase ? 'uppercase' : 'none',
                    fontSize: size,
                    fontFamily: family,
                    color: color,
                }}
            />
        </>
    );
}
