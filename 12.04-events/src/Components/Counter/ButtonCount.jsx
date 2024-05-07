import React from 'react'

export default function ButtonCount({ incr, onClick }) {
  return (
    <>
		{incr >= 0 ? (<button onClick={() => onClick(incr)}>+{incr}</button>) : (<button onClick={() => onClick(incr)}>{incr}</button>)}
	</>
  )
}
