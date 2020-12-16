import React from 'react'
import { AiFillPushpin } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

import css from './styles.module.css';

export default function Contacts() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>CONTACT ME AT</h3>
      <div className={css.justify}>
        <div className={css.contact}>
          <p className= {css.icon}> <AiFillPushpin size={20} color="#fff"/> </p>
          <p className={css.description}>
            Campos Belos - GO -
            Rua 06 Quadra 08 lote 27 - 
            St. Tomazinho
          </p>
        </div>
        <div className={css.contact}>
          <p className= {css.icon}> <AiOutlineMail size={20} color="#fff"/> </p>
          <p className={css.description}>
            mateushbsb@gmail.com                         
          </p>
        </div>
        <div className={css.contact}>
          <p className= {css.icon}> <AiOutlineWhatsApp size={20} color="#fff"/> </p>
          <p className={css.description}>
            (62) 99702-4852                        
          </p>
        </div>
        <div className={css.contact}>
          <p className= {css.icon}> <AiFillLinkedin size={20} color="#fff"/> </p>
          <p className={css.description}>
            @mateushenriquesilva                       
          </p>
        </div>
        <div className={css.contact}>
          <p className= {css.icon}> <AiOutlineGithub size={20} color="#fff"/> </p>
          <p className={css.description}>
            @matthcarter777                       
          </p>
        </div>
      </div>
    </div>
  )
}
