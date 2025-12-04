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
                4 Duplexuri {""}
                <br />
                selecte
              </p>
              <p className={styles.description__text}>
                Spații generoase desfășurate {""}
                <br />pe 2 niveluri cu lumină naturală{""}
                <br />datorită vitrajelor panoramice {""}
                <br />ce oferă senzația {""}
                <br />de townhouse urban — {""}
                <br />comuniune, libertate {""}
                <br />și priveliști uimitoare.
              </p>
              <button type="button" className={styles.offer__btn}>
                <span className={styles.span__text}>Vezi Duplexurile</span>
                <svg
                  className="w-[61rem] h-[61rem]"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="30.6089"
                    cy="30.6089"
                    r="30.1089"
                    stroke="white"
                  />
                  <path
                    d="M40.6029 29.7412C40.8585 30.0245 41 30.3924 41 30.774C41 31.1555 40.8585 31.5235 40.6029 31.8067C38.9844 33.5485 35.3005 36.9395 31 36.9395C26.6995 36.9395 23.0156 33.5485 21.3971 31.8067C21.1415 31.5235 21 31.1555 21 30.774C21 30.3924 21.1415 30.0245 21.3971 29.7412C23.0156 27.9995 26.6995 24.6084 31 24.6084C35.3005 24.6084 38.9844 27.9995 40.6029 29.7412Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.9988 33.857C32.7014 33.857 34.0816 32.4768 34.0816 30.7742C34.0816 29.0716 32.7014 27.6914 30.9988 27.6914C29.2962 27.6914 27.916 29.0716 27.916 30.7742C27.916 32.4768 29.2962 33.857 30.9988 33.857Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.inner__image}>
              <Image
                src={"/desktop-duplex-inner.avif"}
                alt="enso living penthouse"
                loading="eager"
                priority={true}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
            <Image
              src={"/duplex-title.avif"}
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
