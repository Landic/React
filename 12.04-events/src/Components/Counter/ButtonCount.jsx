import React from 'react'
import styles from './Count.module.css'

export default function ButtonCount({ incr, onClick }) {
  return (
    <>
		{incr >= 0 ? (<button className={styles['butt']} onClick={() => onClick(incr)}>+{incr}</button>) : (<button className={styles['butt']} onClick={() => onClick(incr)}>{incr}</button>)}
	</>
  )
}
