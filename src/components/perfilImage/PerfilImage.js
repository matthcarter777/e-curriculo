import React from 'react'

import img from '../../assets/img.jpg'


import css from './style.module.css';

export default function PerfilImage() {
  return (
    <div>
      <img className={css.image} src={img} alt='Mateus Henrique' />
    </div>
  )
}
