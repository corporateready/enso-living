"use client"
import React from 'react'
import styles from "./hero.module.scss"
import Image from "next/image"
import Link from 'next/link'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Image
            src="/enso-header-logo.png"
            alt="enso logo"
            width={117}
            height={44}
            className={styles.logo}
          />
          <div className='flex gap-[15rem]'>
            <button type="button" className='w-[45rem] h-[45rem] bg-[#d9d9d9]/20 rounded-full flex justify-center items-center text-white text-[18rem] uppercase'>ro</button>
            <Link href="tel:+4000000000" className='w-[45rem] h-[45rem] sm:w-[200rem] bg-[#d9d9d9]/20 rounded-full flex justify-center items-center'>
              <svg className='w-[24rem] h-[24rem] inline-block sm:w-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1 22.5992C16.1873 23.3017 17.4829 23.6079 18.769 23.4662C20.0552 23.3245 21.2534 22.7436 22.1622 21.8212L22.9567 21.0431C23.305 20.6863 23.5 20.2071 23.5 19.7081C23.5 19.2091 23.305 18.7299 22.9567 18.3731L19.5845 15.0311C19.2312 14.6833 18.7557 14.4885 18.2603 14.4885C17.765 14.4885 17.2895 14.6833 16.9362 15.0311V15.0311C16.5799 15.3799 16.1014 15.5752 15.6032 15.5752C15.1049 15.5752 14.6265 15.3799 14.2702 15.0311L8.97358 9.72631C8.79689 9.55191 8.65658 9.34408 8.56081 9.11489C8.46504 8.8857 8.41572 8.63973 8.41572 8.39127C8.41572 8.14282 8.46504 7.89685 8.56081 7.66766C8.65658 7.43847 8.79689 7.23063 8.97358 7.05624V7.05624C9.32078 6.70241 9.51534 6.22615 9.51534 5.73005C9.51534 5.23395 9.32078 4.75769 8.97358 4.40386L5.61906 1.04417C5.26278 0.695325 4.78432 0.5 4.28607 0.5C3.78782 0.5 3.30936 0.695325 2.95309 1.04417L2.17625 1.83989C1.25525 2.75008 0.675252 3.95013 0.533777 5.23824C0.392302 6.52635 0.697981 7.82397 1.39942 8.91291C5.05416 14.3074 9.70441 18.9528 15.1 22.5992V22.5992Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className='text-0 sm:text-[18rem] text-white'>+40 00 000 000</span>
            </Link>
          </div>
        </div>
      </header>
      <Image
        src="/hero-bg-mobile.avif"
        alt="hero mobile background"
        fill
        className="inline-block absolute top-0 left-0 z-1 w-full h-full bg-cover bg-norepet bg-center object-cover sm:hidden"
      />
      <Image
        src="/hero-bg-desktop.avif"
        alt="hero desktop background"
        fill
        className="hidden absolute top-0 left-0 z-1 w-full h-full bg-cover bg-norepet bg-center object-cover sm:inline-block"
      />
      <Image
        src={'/building-mask-mobile.avif'}
        alt="hero mobile background"
        loading="eager"
        priority={true}
        width={374}
        height={510}
        className="inline-block absolute bottom-[30rem] right-0 -translate-0 z-3 w-[374rem] h-[510rem] object-fit bg-cover bg-norepet sm:hidden"
      />
      <Image
        src={'/hero-desktop-building.avif'}
        alt="hero desktop background"
        loading="eager"
        priority={true}
        width={1250}
        height={1050}
        className="hidden absolute bottom-0 right-0 -translate-0 z-2 w-[1250rem] h-full object-fit bg-cover bg-norepet sm:inline-block"
      />
      <h1 className={styles.title}>
        <span className='sm:inline-flex justify-center'>proiect</span>
        <span className='inline-flex justify-end sm:mr-[-52rem]'>imobiliar</span>
        <span className='inline-flex justify-start sm:mr-[-30rem]'>exclusivist</span>
      </h1>
      <p className={styles.hero__text_decor}>
        Lansare {""}
        <br className='inline-block sm:hidden'/>ENSŌ LIVING
      </p>
      <p className={styles.text__building_high}>
      un penthouse{""}
      <br />high-end
      </p>
      <p className={styles.text__building_low}>
      showroom {""}
      <br />comercial {""}
      <br className='inline-block sm:hidden'/>și spații{""}
      <br />business{""}
      <br className='inline-block sm:hidden'/>premium
      </p>
      <p className={styles.text__building_middle}>
      duplexuri{""}
      <br />de lux  
      </p>
      <button type="button"
      className={styles.hero__btn}>
        <span className={styles.span__text}>
        Descarcă prezentarea pdf{""}
        <br />și solicită oferta de lansare
        </span>
        <svg 
        className='w-[50rem] h-[50rem] sm:w-[62rem] sm:h-[62rem]' viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="24.5878" stroke="white" strokeWidth="0.82449"/>
          <path d="M25.5315 18.5C25.3486 18.5003 25.1733 18.5722 25.044 18.7C24.9146 18.8278 24.8418 19.0011 24.8415 19.1818V25.3624L22.6613 23.5673C22.5207 23.4517 22.3394 23.396 22.1573 23.4124C21.9752 23.4288 21.8071 23.5159 21.6898 23.6546C21.5729 23.7935 21.5166 23.9726 21.5331 24.1526C21.5497 24.3326 21.6378 24.4987 21.7782 24.6146L25.0899 27.3418C25.1247 27.3662 25.1617 27.3874 25.2003 27.4051C25.2255 27.4218 25.2519 27.4368 25.2793 27.4498C25.3588 27.4829 25.4443 27.5 25.5307 27.5C25.617 27.5 25.7025 27.4829 25.7821 27.4498C25.8088 27.4367 25.8346 27.422 25.8594 27.4057C25.898 27.3879 25.935 27.3667 25.9698 27.3424L29.2815 24.6151C29.3904 24.5256 29.4688 24.4052 29.506 24.2702C29.5432 24.1352 29.5375 23.9922 29.4897 23.8605C29.4418 23.7288 29.3541 23.6148 29.2385 23.5341C29.1228 23.4533 28.9849 23.4097 28.8433 23.4091C28.6819 23.4094 28.5258 23.4653 28.4017 23.5673L26.2215 25.3624V19.1818C26.2212 19.0011 26.1484 18.8278 26.019 18.7C25.8897 18.5722 25.7144 18.5003 25.5315 18.5Z" fill="white"/>
          <path d="M30.8636 27.5C30.6869 27.5003 30.5175 27.5706 30.3925 27.6956C30.2676 27.8205 30.1972 27.9899 30.1969 28.1667V29.7667C30.1967 29.8727 30.1544 29.9742 30.0795 30.0492C30.0045 30.1242 29.9029 30.1664 29.7969 30.1667H21.2636C21.1576 30.1664 21.056 30.1242 20.9811 30.0492C20.9061 29.9742 20.8639 29.8727 20.8636 29.7667V28.1667C20.8636 27.9899 20.7934 27.8203 20.6683 27.6953C20.5433 27.5702 20.3738 27.5 20.1969 27.5C20.0201 27.5 19.8506 27.5702 19.7255 27.6953C19.6005 27.8203 19.5303 27.9899 19.5303 28.1667V29.7667C19.5308 30.2262 19.7136 30.6668 20.0386 30.9917C20.3635 31.3166 20.8041 31.4994 21.2636 31.5H29.7969C30.2565 31.4994 30.697 31.3166 31.022 30.9917C31.3469 30.6668 31.5297 30.2262 31.5303 29.7667V28.1667C31.53 27.9899 31.4597 27.8205 31.3347 27.6956C31.2097 27.5706 31.0403 27.5003 30.8636 27.5Z" fill="white"/>
        </svg>
      </button>
    </div>
  )
}

export default Hero