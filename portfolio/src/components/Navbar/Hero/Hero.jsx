import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./Hero.module.css";  // Assuming you are using CSS Modules

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Anchal</h1>
        <p className={styles.description}>
          As a skilled full-stack web developer with expertise in HTML5, CSS,
          JavaScript, and React.js, I have experience developing e-commerce
          website clones like Adidas & Myntra. Making user-friendly Todo-list
          web application with help of React.js. I am committed to delivering
          exceptional user experiences and am well-versed in the latest web
          development technologies and best practices.
        </p>
        <a href="mailto:anchalpandey1190@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.resize}>
      <img
        src={getImageUrl("hero/photo.jpg")}
        alt="Anchal"
        className={styles.heroImg}
      /></div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
