import  './header.css'
import React from 'react'
import Button from '../button/button'

export default function header() {
  return (
    <div className='header_div'>
       <div className='octagon'>

        <h4>G</h4>
       </div>
      <div className='header_content'>
      <h5>Sobre</h5>
      <h5>Experiencia</h5>
      <h5>Trabalho</h5>
      <h5>Contato</h5>
      <Button name="Resume"></Button>
      </div>
    </div>
  )
}