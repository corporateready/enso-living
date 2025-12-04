import React from "react";
import styles from "./sytles.module.scss";
import Image from "next/image";

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
        <div className={styles.slider__wrapper}>
          <button type="button" className="inline-block w-[200rem] h-full bg-white/30 absolute top-0 left-[98rem] z-1">
            <svg
              className="w-[20rem] h-[76rem] absolute top-1/2 left-1/2 translate-0 z-2"
              viewBox="0 0 20 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9736 75.5L0.556979 37.5L18.9736 0.5"
                stroke="black"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button type="button" className="inline-block w-[200rem] h-full bg-white/30 absolute top-0 right-[98rem] z-1">
            <svg
              className="w-[20rem] h-[76rem] absolute top-1/2 left-1/2 translate-0 z-2 rotate-180"
              viewBox="0 0 20 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9736 75.5L0.556979 37.5L18.9736 0.5"
                stroke="black"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className={styles.slide__item}>
            <Image
              src="/desktop-slider-1.avif"
              alt="enso living slide"
              priority={true}
              fill
            />
          </div>
          {/* <div className={styles.slide__item}>
            <Image
              src="/desktop-slider-1.avif"
              alt="enso living slide"
              priority={true}
              fill
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Index;
