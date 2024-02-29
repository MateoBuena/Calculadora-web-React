import React from 'react'

export const Button = ({ simbolo, className, onClick }) => {

  return (
    <button type='button' onClick={onClick} className={className}>{simbolo}</button>
  )
}
