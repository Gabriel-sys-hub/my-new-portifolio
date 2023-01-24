import  './header.css'
import {React, useState, useEffect} from 'react'
import Button from '../button/button'

export default function header() {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { 
        setShow(true); 
      } else {
        setShow(false);  
      }
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`active ${show && 'hidden'}`}>

    <div className='header_div'>
      <div className='header_content'>
      <h5>Sobre</h5>
      <h5>Experiencia</h5>
      <h5>Trabalho</h5>
      <h5>Contato</h5>
      <Button name="Resume"></Button>
      </div>
    </div>
    </div>
  )
}