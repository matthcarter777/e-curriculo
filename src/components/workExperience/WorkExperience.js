import React from 'react'

import css from './styles.module.css';

export default function WorkExperience() {
  return (
    <div>
      <h3 className={css.title}>WORK EXPERIENCE</h3>
      <h4 className={css.subTitle}>IT Analist</h4>
      <h4 className={css.company}>Itafos | Abr 2020 - Present</h4>
      <ul className={css.assignments}>
        <li>User support</li>
        <li>Improvement of existing applications and creation of new applications</li>
        <li>ERP datasul administration</li>
        <li>Progress reporting development</li>
      </ul>
    </div>
  )
}
