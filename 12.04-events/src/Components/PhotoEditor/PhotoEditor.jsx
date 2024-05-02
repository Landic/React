import React, { useRef, useState } from 'react'
import styles from './PhotoEditor.module.css'

export default function PhotoEditor() {
	const [photoState, setPhotoState] = useState({
		selectedFile: null,
		imageURL: null,
		isDragging: false,
		brightness: 100,
		contrast: 100,
		saturation: 100,
		hue: 0,
		blur: 0,
	});
	const fileInputRef = useRef(null);

	const handleDragOver = event => {
		event.preventDefault();
		setPhotoState(prevState => ({ ...prevState, isDragging: true }));
	};

	const handleDragEnter = event => {
		event.preventDefault();
		setPhotoState(prevState => ({ ...prevState, isDragging: true }));
	};

	const handleDragLeave = () => {
		setPhotoState(prevState => ({ ...prevState, isDragging: false }));
	};

	const handleDrop = event => {
		event.preventDefault();
		setPhotoState(prevState => ({ ...prevState, isDragging: false }));
		const file = event.dataTransfer.files[0];
		handleFile(file);
	};

	const handleFileChange = event => {
		const file = event.target.files[0];
		handleFile(file);
	};

	const handleFile = file => {
		setPhotoState(prevState => ({
			...prevState,
			selectedFile: file,
			imageURL: file ? URL.createObjectURL(file) : null,
		}));
	};

	const handleClick = () => {
		fileInputRef.current.click();
	};

	const handleSliderChange = (key, value) => {
		setPhotoState(prevState => ({
			...prevState,
			[key]: value,
		}));
	};

	const handleTagClick = tag => {
		const filters = {
			'none': { brightness: 100, contrast: 100, saturation: 100, hue: 0, blur: 0 },
			'teal-white': { brightness: 110, contrast: 90, saturation: 120, hue: 180, blur: 0 },
			'teal-lightgreen': { brightness: 100, contrast: 120, saturation: 140, hue: 90, blur: 0 },
			'sepia': { brightness: 100, contrast: 90, saturation: 120, hue: 30, blur: 0 },
			'purple-sepia': { brightness: 100, contrast: 90, saturation: 150, hue: 270, blur: 0 },
			'cherry-icecream': { brightness: 100, contrast: 110, saturation: 90, hue: 0, blur: 0 },
		};
		setPhotoState(prevState => ({ ...prevState, ...filters[tag] }));
	};

	const handleSave = () => {
		const { imageURL, brightness, contrast, saturation, hue, blur } = photoState;
		if (imageURL) {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			const img = new Image();

			img.onload = () => {
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) hue-rotate(${hue}deg) blur(${blur}px)`;
				ctx.drawImage(img, 0, 0);
				const dataURL = canvas.toDataURL('image/jpeg');
				const link = document.createElement('a');
				link.href = dataURL;
				link.download = 'image.jpg';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			};

			img.src = imageURL;
		}
	};
  return (
    <div className={styles.mainContainer}>
    <div className={`${styles.container} ${styles.imageContainer} ${     photoState.isDragging ? styles.dragging : '' }`} onClick={handleClick} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop}>
        {photoState.imageURL ? (
            <img src={photoState.imageURL} alt='Selected Photo' style={{     maxWidth: '100%',     filter: `brightness(${photoState.brightness}%) contrast(${photoState.contrast}%) saturate(${photoState.saturation}%) hue-rotate(${photoState.hue}deg) blur(${photoState.blur}px)`, }}/>
        ) : (
            <p>Drag and drop an image here or click to select</p>
        )}
        <input type='file' ref={fileInputRef} onChange={handleFileChange} accept='image/*' style={{ display: 'none' }}/>
    </div>

    <div className={styles.controls}>
        <label htmlFor='brightness'>Brightness:</label>
        <input type='range' id='brightness' min='0' max='200' value={photoState.brightness} onChange={e => handleSliderChange('brightness', e.target.value)}/>
        <label htmlFor='contrast'>Contrast:</label>
        <input type='range' id='contrast' min='0' max='200' value={photoState.contrast} onChange={e => handleSliderChange('contrast', e.target.value)}/>
        <label htmlFor='saturation'>Saturation:</label>
        <input type='range' id='saturation' min='0' max='200' value={photoState.saturation} onChange={e => handleSliderChange('saturation', e.target.value)}/>
        <label htmlFor='hue'>Hue:</label>
        <input type='range' id='hue' min='0' max='360' value={photoState.hue} onChange={e => handleSliderChange('hue', e.target.value)}/>
        <label htmlFor='blur'>Blur:</label>
        <input type='range' id='blur' min='0' max='20' value={photoState.blur} onChange={e => handleSliderChange('blur', e.target.value)}/>
        <div className={styles.tags}>
            <button onClick={() => handleTagClick('none')}>None</button>
            <button onClick={() => handleTagClick('teal-white')}>Teal White</button>
            <button onClick={() => handleTagClick('teal-lightgreen')}>Teal Lightgreen</button>
            <button onClick={() => handleTagClick('sepia')}>Sepia</button>
            <button onClick={() => handleTagClick('purple-sepia')}>Purple Sepia</button>
            <button onClick={() => handleTagClick('cherry-icecream')}>Cherry Icecream</button>
        </div>
        <button onClick={handleSave}>Save</button>
    </div>
</div>
  )
}
