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
              Bistro/ Restaurant {""}
              <br />spre închiriere
              </p>
              <p className={styles.description__text}>
              Fine-dining desfășurat pe 2 niveluri — {""}
              <br />la parter și mezanin, cu acces direct {""}
              <br />pentru rezidenți și zona de birouri
              </p>
            </div>
          </div>
            <div className={styles.inner__image}>
              <Image
                src={"/desktop-bistro-inner.avif"}
                alt="hero mobi"
                loading="eager"
                priority={true}
                fill
              />
            </div>
            <button type="button" className={styles.offer__btn}>
              <span className={styles.span__text}>
              Solicită oferta pentru Bistro/ Restaurant
              </span>
              <svg
                className="w-[61rem] h-[61rem]"
                viewBox="0 0 61 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30.5" cy="30.5" r="30" stroke="white" />
                <path
                  d="M23.0762 28.6923V22.5385C23.0762 22.1304 23.2383 21.7391 23.5268 21.4506C23.8153 21.1621 24.2066 21 24.6146 21H32.3069L39.9992 28.6923V39.4615C39.9992 39.8696 39.8372 40.2609 39.5486 40.5494C39.2601 40.8379 38.8688 41 38.4608 41H30.7685"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.3076 21V28.6923H39.9999"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.6152 31.7695V41.0003"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 36.3848H29.2308"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
        </div>
        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
          <Image
            src={"/bistro-title.avif"}
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
