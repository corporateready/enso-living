import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Index = () => {
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner_image}>
        <p className={styles.top__text}>
        <span className={styles.text__1}>Un reper</span><br />
        <span className={styles.text__2}>al luxului </span><br />
        <span className={styles.text__3}>contemporan</span>
        </p>
            <Image
              src={"/landmark-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              fill
            />
            <p className={styles.bottom__text}>
        <span className={styles.text__4}>în liniștea</span><br />
        <span className={styles.text__5}>Carpaților</span>
        </p>
          </div>
    </div>
  );
};
export default Index;
