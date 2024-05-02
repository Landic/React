import React, { useState } from 'react'
import DisplayCount from './DisplayCount'
import ButtonCount from './ButtonCount'

export default function Counter() {
    const [count, setCount] = useState(0)

	const handleClick = increment => {
		setCount(count + increment)
	}
  return (
    <div>
		<DisplayCount count={count} />
		<ButtonCount incr={1} onClick={handleClick} />
		<ButtonCount incr={10} onClick={handleClick} />
		<ButtonCount incr={-100} onClick={handleClick} />
		<ButtonCount incr={+25} onClick={handleClick} />
	</div>
  )
}
