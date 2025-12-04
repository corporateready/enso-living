import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Index = () => {
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner}>
        <div className={styles.premium__header_inner}>
          <div className={styles.premium__title_image}>
            <Image
              src={"/duplex-title.avif"}
              alt="hero mobile background"
              loading="eager"
              priority={true}
              fill
            />
          </div>
          <div className={styles.premium__title_content}>
            <p className={styles.premium__title_text}>4 Duplexuri selecte </p>
            <p className={styles.premium__title_description}>
              Spații generoase desfășurate pe 2 niveluri{""}
              <br />
              cu lumină naturală datorită vitrajelor panoramice {""}
              <br />
              ce oferă senzația de townhouse urban — {""}
              <br />
              comuniune, libertate și priveliști uimitoare.
            </p>
          </div>
        </div>
        <div className={styles.premium__content}>
          <div className={styles.premium__inner_image}>
            <Image
              src={"/duplex-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              fill
            />
            <div className={styles.box__dekor}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4997 9.73047V11.5766C12.4997 11.8214 12.4024 12.0562 12.2293 12.2293C12.0562 12.4024 11.8214 12.4997 11.5766 12.4997H9.73047"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.73047 0.5H11.5766C11.8214 0.5 12.0562 0.597252 12.2293 0.770363C12.4024 0.943473 12.4997 1.17826 12.4997 1.42308V3.26923"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 3.26923V1.42308C0.5 1.17826 0.597252 0.943473 0.770363 0.770363C0.943473 0.597252 1.17826 0.5 1.42308 0.5H3.26923"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.26923 12.4997H1.42308C1.17826 12.4997 0.943473 12.4024 0.770363 12.2293C0.597252 12.0562 0.5 11.8214 0.5 11.5766V9.73047"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.73047 3.26953V5.11569"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.26953 3.26953V5.11569"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.49985 4.19238V7.42315H5.11523"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.19238 9.26953C4.81511 9.86105 5.64119 10.1909 6.50008 10.1909C7.35896 10.1909 8.18504 9.86105 8.80777 9.26953"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.span}>Acces controlat prin Face ID</span>
            </div>
          </div>

          <button type="button" className={styles.hero__btn}>
            <span className={styles.span__text}>Vezi Duplexurile</span>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="24.5878"
                stroke="white"
                strokeWidth="0.82449"
              />
              <path
                d="M35.0765 24.495C35.3252 24.7706 35.4629 25.1287 35.4629 25.5C35.4629 25.8713 35.3252 26.2294 35.0765 26.505C33.5015 28.2 29.9165 31.5 25.7315 31.5C21.5465 31.5 17.9615 28.2 16.3865 26.505C16.1377 26.2294 16 25.8713 16 25.5C16 25.1287 16.1377 24.7706 16.3865 24.495C17.9615 22.8 21.5465 19.5 25.7315 19.5C29.9165 19.5 33.5015 22.8 35.0765 24.495Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.7305 28.5C27.3873 28.5 28.7305 27.1569 28.7305 25.5C28.7305 23.8431 27.3873 22.5 25.7305 22.5C24.0736 22.5 22.7305 23.8431 22.7305 25.5C22.7305 27.1569 24.0736 28.5 25.7305 28.5Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
