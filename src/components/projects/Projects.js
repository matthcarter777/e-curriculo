import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { AiOutlineGithub } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import Title from '../title/Title';

import css from './styles.module.css';

export default function Porjects() {
  return (
    <div className={css.container}>
        <Title description="PROJECTS" />
        <div className={css.slide}>
            <AwesomeSlider  background='#fff'>
                <div className={css.background}>
                    <h1 className={css.title}>e-Curriculo</h1>
                    <p className={css.title}>virtual curriculum created in react</p>
                    <div className={css.footerContainer}>
                        <div className={css.linguage}>
                            <p> <SiJavascript size={20} color="#fff"/> </p>
                            <p>Javascript</p>
                        </div>
                        <a 
                        href="https://github.com/matthcarter777/e-curriculo" 
                        className={css.link}
                        target="_blank"
                        >   
                            <div className={css.git}>
                                <p className= {css.icon}> <AiOutlineGithub size={20} className={css.icon}/> </p>
                                <strong>Github</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={css.background}>
                    <h1 className={css.title}>Proffy-front-end-reactJS</h1>
                    <p className={css.title}>Application developed during Next Level Week # 2</p>
                    <div className={css.footerContainer}>
                        <div className={css.linguage}>
                            <p> <SiTypescript size={20} color="#fff"/> </p>
                            <p>Typescript</p>
                        </div>
                        <a 
                        href="https://github.com/matthcarter777/Proffy-front-end-reactJS" 
                        className={css.link}
                        target="_blank"
                        >
                            <div className={css.git}>
                                <p className= {css.icon}> <AiOutlineGithub size={20} /> </p>
                                <strong>Github</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={css.background}>
                    <h1 className={css.title}>Go-Barber-ReactJS</h1>
                    <p className={css.title}>Frontend developed in react.js in the Rocketseat bootcamp</p>
                    <div className={css.footerContainer}>
                        <div className={css.linguage}>
                            <p> <SiTypescript size={20} color="#fff"/> </p>
                            <p>Typescript</p>
                        </div>
                        <a 
                        href="https://github.com/matthcarter777/Go-Barber-ReactJS" 
                        className={css.link}
                        target="_blank"
                        >
                            <div className={css.git}>
                                <p className= {css.icon}> <AiOutlineGithub size={20} /> </p>
                                <strong>Github</strong>
                            </div>
                        </a>
                    </div>
                </div>
            </AwesomeSlider>
        </div>         
    </div>
  )
}
