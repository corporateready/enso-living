import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Index = () => {
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner}>
        <div className={styles.premium__header_inner}>
          <Image
            src={"/facility-title.avif"}
            alt="hero mobile background"
            loading="eager"
            priority={true}
            width={122}
            height={123}
            className={styles.premium__title_image}
          />
          <div className={styles.premium__title_content}>
            <p className={styles.premium__title_text}>
              Facilități
              <br />
              de parcare
            </p>
            <p className={styles.premium__title_description}>
              Parcare subterană
              <br />
              în 2 niveluri dedicate <br />
              rezidenților și zonei de business
            </p>
          </div>
        </div>
        <div className={styles.premium__content}>
          <div className={styles.premium__inner_image}>
            <Image
              src={"/facility-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              fill
            />
          </div>
          <div className={styles.inner__list}>
            <div className={styles.inner__list_item}>
              <span className={styles.item__number}>85</span>
              <span className={styles.item__text}>
                locuri de parcări auto:
                <br />
                acces privat și securizat
              </span>
            </div>
            <div className={styles.inner__list_item__b}>
            <span className={styles.item__number}>61</span>
              <span className={styles.item__text}>
                locuri pentru biciclete
                <br />
                în subterană și la exterior — <br />
                pentru un stil de viață urban,
                <br />
                conectat la natură
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
