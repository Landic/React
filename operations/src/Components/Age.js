import React from 'react'

export default function Age({ age }) {
  return (
    <div>
      {age >= 18 ? <p>старше 18</p> : <p>младше 18</p>}
    </div>
  )
}
