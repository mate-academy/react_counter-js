import React from 'react'

export const Button = ({ className, onClick, text }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
      </button>
  )
}
