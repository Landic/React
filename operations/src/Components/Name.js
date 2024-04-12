import React from 'react'

export default function Name({ name }) {
  return (
    <div>
      {name  ? <p>{name}</p> : <p>нет имени</p>}
    </div>
  )
}
