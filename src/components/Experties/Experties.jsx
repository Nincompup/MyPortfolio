import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import css from './Experties.module.scss'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js'
const Experties = () => {
  return (
    <section className={css.wrapper}>
        <a className="anchor" id="experties"></a>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`row  paddings yPaddings innerWidth flexCenter ${css.container}`}>


            {/* left side */}
            <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',height: '20rem'}} className={`col-sm-12 col-xl-12 col-md-6 ${css.leftSide}`}>
                {
                    projectExperience.map((exp, i)=> {
                        return <motion.div variants = {fadeIn("right", "tween", (i+1)*0.2, 1)} className={css.exp} key={i}>
                            <div style={{background: exp.bg}} className="flexCenter">
                                <exp.icon size={25} color="white"/>
                            </div>
                            <div>
                                <span>{exp.name}</span>
                                <span className='secondaryText'>{exp.projects} Projects</span>
                            </div>
                        </motion.div>
                    })
                }
            </div>


            {/* right */}
            <motion.div
            variants={textVariant(0.5)}
            className={`col-sm-12 col-xs-12 col-md-6   ${css.rightSide}`}>

                <span className='primaryText'>What do I do? </span>
                {WhatDoIHelp.map((paragraph, i)=> <span className='secondaryText' key={i}>{paragraph}</span>)}

            </motion.div>
        </motion.div>
    </section>
  )
}

export default Experties