import React from 'react'
import Contacts from '../contacts/Contacts';

import PersonalImage from '../perfilImage/PerfilImage';

import css from './style.module.css';

export default function PersonalInformations() {
  return (
    <div className={css.container}>
      <div className={css.image}>
        <PersonalImage />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  )
}
