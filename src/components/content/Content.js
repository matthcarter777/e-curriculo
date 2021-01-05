import React from 'react'
import EducationHistory from '../educationHistory/EducationHistory';
import PersonalProfile from '../personalProfile/PersonalProfile';
import Porjects from '../projects/Projects';
import WorkExperience from '../workExperience/WorkExperience';
import Title from '../title/Title';

import css from './styles.module.css';

export default function Content() {
  return (
    <div className={css.margin}>
      <h1 className={css.title}>MATEUS HENRIQUE DA SILVA</h1>
      <Title description="DEVELOPER" />
      <PersonalProfile />
      <WorkExperience />
      <EducationHistory />
      <Porjects />
    </div>
  )
}
