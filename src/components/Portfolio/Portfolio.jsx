import React from "react";
import {Link, redirect} from "react-router-dom";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}
    style={{backgroundColor:'rgb(32, 30, 16)'}}
    >

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          {/* <span className="secondaryText">Explore More Works</span> */}
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
        {/* <Link to=""> */}
        <div style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
     <a href="https://www.youtube.com/watch?v=YOAeBSCkArA/">
            <motion.img style={{borderRadius: "25px"}} height={300} width={400} variants={fadeIn("up", "tween", .5, .6)} src="./p1.png" alt="project" />
            </a>
            <h3>CryptoConnect</h3>
            </div>
        <div style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
     <a href="https://www.youtube.com/watch?v=YOAeBSCkArA/">
            <motion.img style={{borderRadius: "25px"}} height={300} width={400} variants={fadeIn("up", "tween", .5, .6)} src="./p1.png" alt="project" />
            </a>
            <h3>CryptoConnect</h3>
            </div>
        <div style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
     <a href="https://bloggerstop.netlify.app/posts">
            <motion.img style={{borderRadius: "25px"}} height={300} width={400} variants={fadeIn("up", "tween", .5, .6)} src="./p2.png" alt="project" />
            </a>
            <h3>BloggerStop</h3>
            </div>
          

        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
