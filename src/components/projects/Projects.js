import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { AiOutlineGithub } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";

import Title from '../title/Title';

import css from './styles.module.css';

export default function Porjects() {
  return (
    <div className={css.container}>
        <Title description="PROJECTS" />
        <div className={css.slide}>
            <AwesomeSlider  className={css.background}>
                <div className={css.background}>
                    <h1>e-Curriculo</h1>
                    <p>virtual curriculum created in react</p>
                    <div className={css.footerContainer}>
                        <div className={css.linguage}>
                            <p> <SiJavascript size={20} color="#000"/> </p>
                            <p>Javascript</p>
                        </div>
                        <a 
                        href="https://github.com/matthcarter777/e-curriculo" 
                        className={css.link}
                        target="_blank"
                        >   
                            <div className={css.git}>
                                <p className= {css.icon}> <AiOutlineGithub size={20} color="#666666"/> </p>
                                <strong>Link github</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={css.background}>
                    <h1>e-Curriculo</h1>
                    <p>virtual curriculum created in react</p>
                    <div className={css.footerContainer}>
                        <div className={css.linguage}>
                            <p> <SiJavascript size={20} color="#000"/> </p>
                            <p>Javascript</p>
                        </div>
                        <a 
                        href="https://github.com/matthcarter777/e-curriculo" 
                        className={css.link}
                        target="_blank"
                        >
                            <div className={css.git}>
                                <p className= {css.icon}> <AiOutlineGithub size={20} color="#666666"/> </p>
                                <strong>Link github</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={css.background}>
                    <h1>e-Curriculo</h1>
                    <p>virtual curriculum created in react</p>
                    <div className={css.footerContainer}>
                        <div className={css.linguage}>
                            <p> <SiJavascript size={20} color="#000"/> </p>
                            <p>Javascript</p>
                        </div>
                        <a 
                        href="https://github.com/matthcarter777/e-curriculo" 
                        className={css.link}
                        target="_blank"
                        >
                            <div className={css.git}>
                                <p className= {css.icon}> <AiOutlineGithub size={20} color="#666666"/> </p>
                                <strong>Link github</strong>
                            </div>
                        </a>
                    </div>
                </div>
            </AwesomeSlider>
        </div>         
    </div>
  )
}
