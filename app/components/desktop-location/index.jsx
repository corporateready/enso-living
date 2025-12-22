import React from "react";
import styles from "./sytles.module.scss";
import Image from "next/image";
import Enso from "./pin-icons/enso";
import Carrefour from "./pin-icons/carrefour";
import Kaufland from "./pin-icons/kaufland";
import Lidl from "./pin-icons/lidl";
import Poiana from "./pin-icons/poiana";
import Amfiteatr from "./pin-icons/amfiteatr";
import BranCastle from "./pin-icons/bran-castle";
import Rasnov from "./pin-icons/rasnov";
import DinoPark from "./pin-icons/dino-park";
import NewCenter from "./pin-icons/new-center";
import Afibrasjov from "./pin-icons/afibrashov"
import Coresi from "./pin-icons/coresi"
import OldCenter from "./pin-icons/old-center"
import Airport from "./pin-icons/airport"
import DirectionLine from "./pin-icons/line-direction"

const Index = ({ handlerFormOpen }) => {
  return (
    <div className={styles.section}>
      <Poiana />
      <Amfiteatr />
      <BranCastle />
      <Rasnov />
      <DinoPark />
      <Enso />
      <Carrefour />
      <Kaufland />
      <Lidl />
      <DirectionLine />
      <p className="text-white text-[11rem] absolute top-[952rem] left-[870rem] z-1 w-full"> Str. Calea București</p>
      <div className={styles.head__overlay} />
      <Image
        src="/clear-map.png"
        alt="enso living slide"
        priority
        quality={85}
        fill
        sizes="(min-width: 640px) 100vw"
      />
      <NewCenter />
      <Afibrasjov />
      <Coresi />
      <OldCenter />
      <Airport />
      <div className="w-full h-[1274rem]"></div>
      <div className={styles.head__content}>
        <p className={styles.head__title}>
          Acces rapid către punctele cheie{""}
          <br />
          ale Brașovului și priveliști panoramice
        </p>
        <p className={styles.head__subtitle}>asupra munților</p>
        <p className={styles.head__subcontent_text}>
          Localizare premium, între zona {""}
          <br />
          rezidențială și cea de business, {""}
          <br />
          cu expunere către {""}
          <br />
          un public select
        </p>
        <button
          type="button"
          className={styles.offer__btn}
          onClick={handlerFormOpen}
          aria-label="open location form"
        >
          <span className={styles.span__text}>Solicită oferta de lansare</span>
          <svg
            className="w-[61rem] h-[61rem]"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30.5" cy="30.5" r="30" stroke="white" />
            <path
              d="M31 24.5391V37.5391"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.5 31H37.5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Index;
