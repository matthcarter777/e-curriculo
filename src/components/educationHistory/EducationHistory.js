import React from 'react'

import Title from '../title/Title';

import css from './styles.module.css';

export default function EducationHistory() {
  return (
    <div>
      <Title description="EDUCATIONAL HISTORY" />
      <div className={css.container}>
        <h4 className={css.subTitle}>IF Goiano - Campus Campos Belos </h4>
        <h4 className={css.company}>internet computer technician | Jan 2017 - Jul 2018</h4>
        <ul className={css.assignments}>
          <li>Web development</li>
          <li>Database manager</li>
        </ul>
      </div>
      <div className={css.container}>
        <h4 className={css.subTitle}>Unigram - Campus Campos Belos </h4>
        <h4 className={css.company}>software analysis and development | Jul 2019 - Dec 2021</h4>
        <ul className={css.assignments}>
          <li>Software Engineering</li>
          <li>Web development</li>
          <li>Database manager</li>
        </ul>
      </div>
    </div>
  )
}
