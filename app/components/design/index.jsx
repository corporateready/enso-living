import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Index = () => {
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner_image}>
        <p className={styles.top__text}>
        <span className={styles.text__1}>Design interior
        <br />premium by ARUTIN</span>
        <span className={styles.text__2}>  Art Bureau </span><br />
        <span className={styles.text__3}>pentru locuințe
        <br />cu identitate</span>
        </p>
            <Image
              src={"/mobile-design-bg.avif"}
              alt="enso living design"
              loading="eager"
              priority={true}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
            />
            
          </div>
    </div>
  );
};
export default Index;
