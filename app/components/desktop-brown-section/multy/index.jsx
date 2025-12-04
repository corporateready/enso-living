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
              Lobby office{""}
              <br />multifuncțional
              </p>
              <p className={styles.description__text}>
              Tavane impunătoare în 2 niveluri,{""}
              <br />conexiune directă cu zona bistro{""}
              <br />și acces controlat prin Face ID
              </p>
            </div>
          </div>
            <div className={styles.inner__image}>
              <Image
                src={"/desktop-multy-inner.avif"}
                alt="hero mobi"
                loading="eager"
                priority={true}
                fill
              />
            </div>
        </div>
        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
          <Image
            src={"/multy-title.avif"}
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
