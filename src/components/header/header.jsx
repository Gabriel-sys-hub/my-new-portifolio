import  './header.css'
import {React, useState, useEffect} from 'react'
import Button from '../button/button'

export default function header() {

  const [show, setShow] = useState(false);
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
    <div className={`active ${show && "hidden"}`}>
      <div className="header_div">
        <div className="header-logo">
          <h2>G</h2>
        </div>
        <div className="header_content">
          <h5 className="header-h5">Sobre</h5>
          <h5 className="header-h5">Experiencia</h5>
          <h5 className="header-h5">Trabalho</h5>
          <h5 className="header-h5">Contato</h5>
          <Button
            name="Resume"
            href="https://docs.google.com/document/d/1HbQrvxnx3p_PRmGaH-JVBSd3-fm-Ye6Yvcd0CEH8XuU/edit?usp=sharing"
          ></Button>
        </div>
      </div>
    </div>
  );
}