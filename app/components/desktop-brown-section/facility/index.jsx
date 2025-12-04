import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Index = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.inner__header}>
            <div className={styles.head__content}>
              <p className={styles.title__text}>
              Facilități{""}
              <br />de parcare
              </p>
              <p className={styles.description__text}>
              Parcare subterană{""}
              <br />în 2 niveluri dedicate{""}
              <br />rezidenților și zonei de business
              </p>
            </div>
          </div>
            <div className={styles.inner__image}>
              <Image
                src={"/desktop-facility-inner.avif"}
                alt="hero mobi"
                loading="eager"
                priority={true}
                fill
              />
            </div>
            <div className={styles.content}>
              <div className={styles.inner__list_item__up}>
                <span className={styles.item__number}>85</span>

                <span className={styles.item__text}>
                locuri de parcări auto:{""}
                <br />acces privat și securizat
                </span>
              </div>
              <div className={styles.inner__list_item__down}>
                <span className={styles.item__number}>61</span>

                <span className={styles.item__text}>
                locuri pentru biciclete în subterană{""}
                <br />și la exterior — pentru un stil de viață {""}
                <br />urban, conectat la natură
                </span>
              </div>
            </div>
        </div>
        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
          <Image
            src={"/facility-title.avif"}
            alt="hero mobile background"
            loading="eager"
            priority={true}
            fill
          />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
