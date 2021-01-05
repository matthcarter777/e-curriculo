import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import Title from '../title/Title';

import css from './styles.module.css';

export default function Porjects() {
  return (
    <div className={css.container}>
        <Title description="PROJECTS" />
        <AwesomeSlider className={css.background}>
            <div className={css.background}>
                <h1>e-Curriculo</h1>
                <p>virtual curriculum created in react</p>
                <div className={css.footerContainer}>
                    <p>Javascript</p>
                    <a 
                       href="#" 
                       className={css.link}
                    >
                        <strong>Link github</strong>
                    </a>
                </div>
            </div>
            <div>
                <h1>Teste 2</h1>
            </div>
            <div>
                <h1>Teste 3</h1>
            </div>
        </AwesomeSlider>         
    </div>
  )
}
