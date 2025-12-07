import React from "react";
import styles from "./sytles.module.scss";
import Image from "next/image";
import { DesktopSlider } from "./desktop-slider";

const Index = () => {
  return (
    <div className={styles.section}>
      <div className={styles.head__content}>
        <p className={styles.title}>
          Landscape design{""}
          <br />
          by ACLA Architecture Studio
        </p>
        <p className={styles.subtitle}>
          un cadru natural{""}
          <br />
          <span className={styles.subtitle__span}>
            deosebit pentru{""}
            <br />
            un stil de viață select
          </span>
        </p>
      </div>
      <div className={styles.wrapper}>
       <DesktopSlider />
      </div>
    </div>
  );
};
export default Index;
