import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { MobileSlider } from "./mobile-slider";

const Index = () => {
  return (
    <div className={styles.premium}>
      
      <div className={styles.premium__inner_slider}>
        <MobileSlider />
        <div className={styles.slider__navigate}>
        <Image
          src={"/slider-navigate.avif"}
          alt="hero mobi"
          loading="eager"
          priority={true}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
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
