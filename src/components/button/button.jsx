import React from 'react'
import './button.css'
export default function Button(props) {
    const name = props.name;
  return (
    <div className='button-glow'>

        <h5 className='button-name'>{name}</h5>
    </div>
  )
}
