import React from 'react'

export default function Admin({ isAdmin }) {
  return (
    <div>
      {isAdmin && <p>админ</p>}
    </div>
  )
}
