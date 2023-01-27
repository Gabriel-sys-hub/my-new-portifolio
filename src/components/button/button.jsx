import React from 'react'
import './button.css'
export default function Button(props) {
    const name = props.name;
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className="button-glow"
      >
        <h5 className="button-name">{name}</h5>
      </button>
    </a>
  );
}
