import React from "react";
import img_1 from "../../../../public/duplex-inner.avif";
import img_2 from "../../../../public/desktop-duplex-inner-2.avif";
import img_6 from "../../../../public/desktop-duplex-inner-1.avif";
import img_3 from "../../../../public/desktop-duplex-inner-3.avif";
import img_4 from "../../../../public/desktop-duplex-inner-5.avif";
import img_5 from "../../../../public/desktop-duplex-inner-6.avif";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import styles from "./styles.module.scss";

export const MobileSlider = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const slides = [
    { id: 1, image: img_1 },
    { id: 6, image: img_6 },
    { id: 2, image: img_2 },
    { id: 3, image: img_3 },
    { id: 4, image: img_4 },
    { id: 5, image: img_5 },
  ];
  return (
    <section className={styles.embla}>
      <div className="w-[68rem] h-[68rem] absolute bottom-[-24rem] left-1/2 -translate-1/2 z-1">
      <svg
       className="w-full h-full"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject x="-2.8" y="-2.8" width="73.6" height="73.6">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: "blur(1.4px)", clipPath:"url(#bgblur_0_847_139_clip_path)", height:"100%",width:"100%"
            }}
          ></div>
        </foreignObject>
        <circle
          data-figma-bg-blur-radius="2.8"
          cx="34"
          cy="34"
          r="34"
          fill="white"
          fillOpacity="0.46"
        />
        <path
          d="M51 19.0176H37"
          stroke="black"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 16.0059L51 19.0166L48 22.0274"
          stroke="black"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 16.0059L37 19.0166L40 22.0274"
          stroke="black"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 33.0681C24 31.4052 22.657 30.0573 21 30.0573C19.343 30.0573 18 31.4052 18 33.0681V43.1039C18 51.4176 24.716 58.1577 33 58.1577C41.284 58.1577 48 51.4176 48 43.1039V35.0753C48 33.4123 46.657 32.0645 45 32.0645C43.343 32.0645 42 33.4123 42 35.0753V33.0681C42 31.4052 40.657 30.0573 39 30.0573C37.343 30.0573 36 31.4052 36 33.0681V31.0609C36 29.398 34.657 28.0502 33 28.0502C31.343 28.0502 30 29.398 30 31.0609V17.0108C30 15.3478 28.657 14 27 14C25.343 14 24 15.3478 24 17.0108V40.0932V33.0681Z"
          stroke="#1A1717"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <clipPath
            id="bgblur_0_847_139_clip_path"
            transform="translate(2.8 2.8)"
          >
            <circle cx="34" cy="34" r="34" />
          </clipPath>
        </defs>
      </svg>
      </div>

      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide) => (
            <div className={styles.embla__slide} key={slide.id}>
              <div className={styles.embla__slide__image}>
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
