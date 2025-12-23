import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Poiana from "../pin-icons/poiana-mobile";
import Amfiteatr from "../pin-icons/amfiteatr-mobile"
import BranCastle from "../pin-icons/bran-castle-mobile"
import Rasnov from "../pin-icons/rasnov-mobile"
import DinoPark from "../pin-icons/dino-park-mobile"
import Enso from "../pin-icons/enso-mobile"
import Carrefour from "../pin-icons/carrefour-mobile"
import Kaufland from "../pin-icons/kaufland-mobile"
import Lidl from '../pin-icons/lidl-mobile'
import DirectionLine from "../pin-icons/line-direction-mobile"
import NewCenter from "../pin-icons/new-center-mobile";
import Afibrasjov from "../pin-icons/afibrashov-mobile"
import Coresi from "../pin-icons/coresi-mobile"
import OldCenter from "../pin-icons/old-center-mobile"
import Airport from "../pin-icons/airport-mobile"

const Index = ({handlerFormOpen}) => {
  return (
    <div className={styles.premium}>
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
       <Image
          src={"/location-inner-mobile.avif"}
          alt="enso living location"
          loading="eager"
          priority={true}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
        />
        <NewCenter />
        <Afibrasjov />
        <Coresi />
        <OldCenter />
        <Airport />
      <div className={styles.premium__inner_image}>
        <button type="button" className={styles.hero__btn} onClick={handlerFormOpen}>
          <span className={styles.span__text}>Solicită oferta de lansare</span>
          <svg
              className="w-[50rem] w-[50rem]"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="24.5878"
                stroke="white"
                stokewidth="0.82449"
              />
              <path
                d="M20.8457 24.3654V20.6731C20.8457 20.4283 20.943 20.1935 21.1161 20.0204C21.2892 19.8473 21.524 19.75 21.7688 19.75H26.3842L30.9996 24.3654V30.827C30.9996 31.0718 30.9023 31.3066 30.7292 31.4797C30.5561 31.6528 30.3213 31.75 30.0765 31.75H25.4611"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.3848 19.75V24.3654H31.0002"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.7695 26.2119V31.7504"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 28.9805H24.5385"
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
