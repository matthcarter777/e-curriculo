import React from 'react'

import Title from '../title/Title';

import css from './styles.module.css';

export default function PersonalProfile() {
  return (
    <div>
      <Title
        className={css.title} 
        description="PERSONAL PROFILE" 
      />
      <p className={css.description}>
        Studying analysis and systems development, specializing in web development using technologies
        node.js, react and angular, great focus on solving problems and optimizing applications,
        ease of communication and teamwork.
      </p>
    </div>
  )
}
