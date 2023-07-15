import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:lokhandeom172@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Where to find me</span>
            <span>Hostel 2,</span>
            <span>IIIT Lucknow campus,</span>
            <span>Lucknow,India</span>
          </div>
          <div className={css.info}>
            <span className="secondaryText">Contact me</span>
            <span>Mobile : +91 9359838609</span>
            <span>Mail : lokhandeom172@gmail.com</span>
          </div>
          
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
