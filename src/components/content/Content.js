import React from 'react'
import EducationHistory from '../educationHistory/EducationHistory';
import PersonalProfile from '../personalProfile/PersonalProfile';
import WorkExperience from '../workExperience/WorkExperience';

import css from './styles.module.css';

export default function Content() {
  return (
    <div>
      <h1 className={css.title}>MATEUS HENRIQUE DA SILVA</h1>
      <h2 className={css.subTitle}>DEVELOPER</h2>
      <PersonalProfile />
      <WorkExperience />
      <EducationHistory />
    </div>
  )
}
