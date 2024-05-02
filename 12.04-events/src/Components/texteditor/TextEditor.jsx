import React, { useState } from 'react'
import styles from './texteditor.module.css'


export default function TextEditor() {
    const [isBold, setIsBold] = useState(false)
	const [isItalic, setIsItalic] = useState(false)
	const [isUnderline, setIsUnderline] = useState(false)
	const [isUppercase, setIsUppercase] = useState(false)
	const [size, setSize] = useState('14px')
	const [family, setFamily] = useState('Arial')
	const [color, setColor] = useState('#000000') 

	const toggleBold = () => {
		setIsBold(!isBold)
	}

	const toggleItalic = () => {
		setIsItalic(!isItalic)
	}

	const toggleUnderline = () => {
		setIsUnderline(!isUnderline)
	}

	const toggleCase = () => {
		setIsUppercase(!isUppercase)
	}

	const onChangeSize = e => {
		setSize(e.target.value)
	}

	const onChangeFamily = e => {
		setFamily(e.target.value)
	}
    const onChangeColor = e => {
		setColor(e.target.value)
	}
  return (
    <>
			<div className={styles['butt']}>
				<button className={isBold ? styles.active : ''} onClick={toggleBold}>B</button>

				<button className={isItalic ? styles.active : ''} onClick={toggleItalic}>I</button>
				<button className={isUnderline ? styles.active : ''} onClick={toggleUnderline}>U</button>
				<button className={isUppercase ? styles.active : ''} onClick={toggleCase}>Tt</button>

				<select name='myFontSize' value={size} onChange={onChangeSize}>
					<option value='12px'>12px</option>
					<option value='14px'>14px</option>
					<option value='16px'>16px</option>
					<option value='20px'>20px</option>
				</select>

				<select name='myFontFamily' value={family} onChange={onChangeFamily}>
					<option value='Arial'>Arial</option>
					<option value='Impact'>Impact</option>
					<option value='Times New Roman'>Times New Roman</option>
				</select>

				<input type='color' value={color} onChange={onChangeColor}/>
			</div>

			<textarea className={styles['editor']} style={{ fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal', textDecoration: isUnderline ? 'underline' : 'none', textTransform: isUppercase ? 'uppercase' : 'none', fontSize: size, fontFamily: family, color: color,}}
			/>
		</>
  )
}
