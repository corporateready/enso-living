import React from "react";
import styles from "./sytles.module.scss";
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.section}>
      <div className="w-full h-[1274rem]">
        <Image
          src="/desktop-location.avif"
          alt="enso living slide"
          priority={true}
          fill
        />
      </div>
      <div className={styles.head__content}>
        <p className={styles.head__title}>
          Acces rapid către punctele cheie{""}
          <br />
          ale Brașovului și priveliști panoramice
        </p>
        <p className={styles.head__subtitle}>asupra munților</p>
        <p className={styles.head__subcontent_text}>
          Localizare premium, între zona {""}
          <br />
          rezidențială și cea de business, {""}
          <br />
          cu expunere către {""}
          <br />
          un public select
        </p>
        <button type="button" className={styles.offer__btn}>
          <span className={styles.span__text}>Solicită oferta de lansare</span>
          <svg
            className="w-[61rem] h-[61rem]"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30.5" cy="30.5" r="30" stroke="white" />
            <path
              d="M31 24.5391V37.5391"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.5 31H37.5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Index;
