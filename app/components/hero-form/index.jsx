import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export const HeroForm = ({ handlerFormOpen }) => {
    const isMobile = useMediaQuery({query: "(max-width : 640px)"})
  return (
    <div onClick={handlerFormOpen} className={styles.section}>
      <div className="absolute top-0 left-0 z-1 bg-black/20 inset-0 backdrop-blur-[5px]"></div>
      <div className={styles.inner}>
        <button
          type="button"
          onClick={handlerFormOpen}
          className={styles.close__btn}
        >
          <svg
            className="w-[23rem] h-[23rem] sm:w-[30rem] sm:h-[30rem]"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.2857 0.5L0.5 29.2857"
              stroke={!!isMobile ?  "#050505" : "#ffffff"}
              strokeLinecap="round"
              strokeLinejoin="round"
              suppressHydrationWarning
            />
            <path
              d="M0.5 0.5L29.2857 29.2857"
              stroke={!!isMobile ? "#050505" : "#ffffff"}
              strokeLinecap="round"
              strokeLinejoin="round"
              suppressHydrationWarning
            />
          </svg>
        </button>
        <div className={styles.inner__image}>
          <Image
            src="/desktop-apartment-inner-2.avif"
            alt="hero mobile background"
            loading="eager"
            fill
            className="hidden sm:inline-block absolute top-0 left-0 z-1 w-full h-full bg-cover bg-norepet bg-center object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
          />
          <Image
            src="/form-bg-mobile.avif"
            alt="hero mobile background"
            loading="eager"
            fill
            className="inline-block absolute top-0 left-0 z-1 w-full h-full bg-cover bg-norepet bg-center object-cover sm:hidden"
            sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
          />
          
        </div>
        <div className={styles.inner__content}>
          <p className={styles.content__title}>
            Lasă-ne datele {""}
            <br />
            de contact
          </p>
          <p className={styles.content__subtitle}>
            și primești detalii{""}
            <br />
            exclusive
          </p>
          <p className={styles.content__title_mobile}>
            Lasă-ne datele de contact și primești detalii exclusive
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className={styles.form__submit}
          >
            <input type="text" name="name" placeholder="Nume, Prenume" />
            <input type="email" name="name" placeholder="E-mail" />
            <input type="tel" name="name" placeholder="+40" />
            <button type="button" className={styles.offer__btn}>
              <span className={styles.span__text}>Solicită oferta <span className="inline-block sm:hidden">pentru oficii</span></span>
              <svg
                className="sw-[42rem] h-[42rem] m:w-[61rem] sm:h-[61rem]"
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
          </form>
        </div>
      </div>
    </div>
  );
};
