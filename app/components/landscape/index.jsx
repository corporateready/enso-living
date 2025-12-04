import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Index = () => {
  return (
    <div className={styles.premium}>
      <p className={styles.top__text_title}>
      Landscape design{""}
      <br />by ACLA Architecture Studio
      </p>
      <p className={styles.top__text_subtitle}>
      Un cadru natural deosebit {""}
      <br />pentru un stil de viață select
      </p>
      <div className={styles.premium__inner_slider}>
        <Image
          src={"/landscape-slide.avif"}
          alt="hero mobi"
          loading="eager"
          priority={true}
          fill
        />
        <div className={styles.slider__navigate}>
        <Image
          src={"/slider-navigate.avif"}
          alt="hero mobi"
          loading="eager"
          priority={true}
          fill
        />
        </div>
      </div>
      <p className={styles.bottom__text_title}>
      Acces rapid către{""}
      <br />punctele cheie{""}
      <br />ale  Brașovului și priveliști{""} 
      <br />panoramice asupra munților
      </p>
      <p className={styles.bottom__text_subtitle}>
      Localizare premium, între zona{""}
      <br /> rezidențială și cea de business,{""}
      <br /> cu expunere către un public{""}
      <br/> select
      </p>
    </div>
  );
};
export default Index;
