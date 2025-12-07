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
            src={"/bistro-title.avif"}
            alt="hero mobile background"
            loading="eager"
            priority={true}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          </div>
          <div className={styles.premium__title_content}>
            <p className={styles.premium__title_text}>
              Bistro/ Restaurant
              <br />
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={styles.box__dekor}>
              <span className={styles.span}>
                Acces direct pentru rezidenți și zona de birouri
              </span>
            </div>
          </div>
          <button type="button" className={styles.hero__btn}>
            <span className={styles.span__text}>
              Solicită oferta pentru
              <br />
              Bistro/ Restaurant
            </span>
            <svg
              className="w-[50rem] h-[50rem]"
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
                d="M20.8457 23.1154V19.4231C20.8457 19.1783 20.943 18.9435 21.1161 18.7704C21.2892 18.5973 21.524 18.5 21.7688 18.5H26.3842L30.9996 23.1154V29.577C30.9996 29.8218 30.9023 30.0566 30.7292 30.2297C30.5561 30.4028 30.3213 30.5 30.0765 30.5H25.4611"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.3848 18.5V23.1154H31.0002"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.7695 24.9619V30.5004"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 27.7305H24.5385"
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
