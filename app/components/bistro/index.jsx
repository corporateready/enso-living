import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Index = () => {
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner}>
        <div className={styles.premium__header_inner}>
          <Image
            src={"/bistro-title.avif"}
            alt="hero mobile background"
            loading="eager"
            priority={true}
            width={95}
            height={100}
            className={styles.premium__title_image}
          />
          <div className={styles.premium__title_content}>
            <p className={styles.premium__title_text}>
            Bistro/ Restaurant<br />
            spre închiriere  
            </p>
            <p className={styles.premium__title_description}>
            Fine-dining desfășurat pe 2 niveluri — <br />
            la parter și mezanin
            </p>
          </div>
        </div>
        <div className={styles.premium__content}>
          <div className={styles.premium__inner_image}>
            <Image
              src={"/bistro-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              fill
            />
            <div className={styles.box__dekor}>
              <span className={styles.span}>Acces direct pentru rezidenți și zona de birouri</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
