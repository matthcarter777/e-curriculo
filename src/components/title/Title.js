import React from 'react';

import css from './styles.module.css';

export default function Title({description}) {
  return (
    <div className={css.title}>
       <h3>{description}</h3>
    </div>
  )
}
