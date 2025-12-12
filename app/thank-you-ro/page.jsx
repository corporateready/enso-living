"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className={styles.thanks_overflow}>
      <Image
        src={"/thank-you-bg.avif"}
        alt="enso living thanks page backgound"
        fill
        className="hidden sm:inline-block"
      />
      <Image
        src={"/thank-you-mobile-bg.avif"}
        alt="enso living thanks page backgound"
        fill
        className="inline-block sm:hidden"
      />
      <div className={styles.thanks}>
        <header className={styles.header}>
          <div className={styles.header__inner}>
            <div className={styles.header__logo_mobile}>
              <span className={styles.span__blur}></span>
            <Image
                src="/transparent-logo.avif"
                alt="enso logo"
                loading="eager"
                priority={true}
                width={86}
                height={30}
                sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
                className="relative z-3 w-[86rem] h-[30rem]"
              />
            </div>
            <div className={styles.header__logo_desktop}>
            <Image
                src="/transparent-logo.avif"
                alt="enso logo"
                loading="eager"
                priority={true}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
              />
            </div>
            <div className="flex gap-[17rem]">
              <button
                type="button"
                className="w-[45rem] h-[45rem] bg-[#d9d9d9]/20 rounded-full flex justify-center items-center text-white text-[18rem] uppercase"
              >
                ro
              </button>
              <Link
                href="tel:+4000000000"
                className="w-[45rem] h-[45rem] sm:w-[200rem] bg-[#d9d9d9]/20 rounded-full inline-flex justify-center items-center"
              >
                <span className={styles.span__blur}></span>
                <svg
                  className="w-[24rem] h-[24rem] inline-block ml-[8rem] sm:w-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1 22.5992C16.1873 23.3017 17.4829 23.6079 18.769 23.4662C20.0552 23.3245 21.2534 22.7436 22.1622 21.8212L22.9567 21.0431C23.305 20.6863 23.5 20.2071 23.5 19.7081C23.5 19.2091 23.305 18.7299 22.9567 18.3731L19.5845 15.0311C19.2312 14.6833 18.7557 14.4885 18.2603 14.4885C17.765 14.4885 17.2895 14.6833 16.9362 15.0311V15.0311C16.5799 15.3799 16.1014 15.5752 15.6032 15.5752C15.1049 15.5752 14.6265 15.3799 14.2702 15.0311L8.97358 9.72631C8.79689 9.55191 8.65658 9.34408 8.56081 9.11489C8.46504 8.8857 8.41572 8.63973 8.41572 8.39127C8.41572 8.14282 8.46504 7.89685 8.56081 7.66766C8.65658 7.43847 8.79689 7.23063 8.97358 7.05624V7.05624C9.32078 6.70241 9.51534 6.22615 9.51534 5.73005C9.51534 5.23395 9.32078 4.75769 8.97358 4.40386L5.61906 1.04417C5.26278 0.695325 4.78432 0.5 4.28607 0.5C3.78782 0.5 3.30936 0.695325 2.95309 1.04417L2.17625 1.83989C1.25525 2.75008 0.675252 3.95013 0.533777 5.23824C0.392302 6.52635 0.697981 7.82397 1.39942 8.91291C5.05416 14.3074 9.70441 18.9528 15.1 22.5992V22.5992Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-0 sm:text-[18rem] text-white">
                  +40 00 000 000
                </span>
              </Link>
            </div>
          </div>
        </header>

        <div className="w-full h-full flex flex-col">
          <div className="px-60 sm:px-0 w-full sm:w-[1440rem] h-full mx-auto">
            <h2 className="w-full text-center sm:text-left text-[60rem] sm:text-[78rem] text-white font-medium leading-[100%] mt-[32dvh] sm:mt-[35dvh]">
              Mulțumim!
            </h2>
            <p className="text-[26rem] sm:text-[30rem] text-white font-normal leading-[120%] sm:leading-[120%] mt-[3dvh] sm:mt-[4vh] text-center sm:text-left">
              Solicitarea ta a fost{""}
              <br className="block sm:hidden" /> înregistrată cu succes. {""}
              <br className="block" /> În cel mai scurt timp vei primi
              prezentarea PDF pe e-mail. {""}
            </p>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footer__inner}>
            <div className={styles.footer__content}>
              <div className="flex flex-col gap-[8rem] sm:gap-0">
                <p className={styles.content__text}>
                  © 2025 Toate drepturile sunt rezervate.
                </p>
                <div className={styles.content__links}>
                  <Link href={"/terms-and-conditions"}>Terms & conditions</Link>
                  <Link href={"/privacy-policy"}>Privacy Policy </Link>
                </div>
              </div>
              <div className={styles.socials__link}>
                <Link href={"tel:+40000000000"}>
                  <svg
                    className="w-[23rem] h-[22rem] sm:w-[46rem] sm:h-[44rem] opacity-60"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.8825 18.2019C22.709 18.6081 22.4849 18.9972 22.2322 19.4112C21.4215 20.6382 20.1219 21.4967 18.7234 21.7658C13.8865 22.6604 8.86158 20.968 4.95354 17.1058C1.62224 13.8135 -0.125153 9.71009 0.00697973 5.5262C0.0344233 4.2217 0.695673 2.90438 1.74078 1.94191C2.69832 1.08946 3.65863 0.448817 4.5389 0.10189C4.67347 0.0627795 4.8365 0.0190347 4.97009 0.00766154C5.47722 -0.0443251 5.95556 0.17033 6.20435 0.588267C7.35003 2.56049 7.97845 4.42715 8.12913 6.31332C8.1621 6.78019 7.98029 7.26837 7.59626 7.67139L6.06205 9.28144C5.56192 9.7992 5.43458 10.542 5.74989 11.0585C6.40539 12.1406 7.17376 13.1581 8.08727 14.0322C9.28913 15.1913 10.6417 16.1511 12.1226 16.8936C12.6268 17.1296 13.3265 16.9812 13.8214 16.5156L15.2206 15.2065C15.6258 14.853 16.1224 14.6472 16.5931 14.6782C18.5033 14.8288 20.3921 15.4498 22.3877 16.5821C22.9346 16.8931 23.1566 17.5756 22.8825 18.2019Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61580179168995"
                  }
                >
                  <svg
                    className="w-[13rem] h-[24rem] sm:w-[26rem] sm:h-[48rem] opacity-60"
                    viewBox="0 0 13 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5105 0.0049936L9.39235 0C5.88926 0 3.62541 2.31828 3.62541 5.90643V8.62969H0.490293C0.219381 8.62969 0 8.84891 0 9.11932V13.065C0 13.3354 0.219631 13.5544 0.490293 13.5544H3.62541V23.5106C3.62541 23.781 3.84479 24 4.1157 24H8.20614C8.47705 24 8.69643 23.7808 8.69643 23.5106V13.5544H12.3621C12.633 13.5544 12.8524 13.3354 12.8524 13.065L12.8539 9.11932C12.8539 8.98948 12.8021 8.86514 12.7103 8.77326C12.6185 8.68138 12.4934 8.62969 12.3634 8.62969H8.69643V6.32115C8.69643 5.21157 8.96134 4.64829 10.4095 4.64829L12.51 4.64755C12.7806 4.64755 13 4.42833 13 4.15817V0.494367C13 0.224462 12.7809 0.00549296 12.5105 0.0049936Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href={"https://www.instagram.com/ensodevelopment.ro"}>
                  <svg
                    className="w-[24rem] h-[24rem] sm:w-[48rem] sm:h-[48rem] opacity-60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0068 0C15.2664 2.83935e-07 15.6749 0.0142456 16.96 0.0751953C18.2354 0.131484 19.1077 0.337485 19.8721 0.632812C20.66 0.937559 21.3311 1.34988 21.9971 2.01562C22.6678 2.68139 23.0756 3.35237 23.3711 4.14941C23.6665 4.90885 23.8724 5.78554 23.9287 7.06055C23.985 8.34045 23.999 8.74869 23.999 12.0068C23.999 15.265 23.985 15.6735 23.9287 16.9531C23.8724 18.2284 23.6666 19.101 23.3711 19.8652C23.0662 20.6529 22.6533 21.3235 21.9873 21.9893C21.3214 22.6549 20.6502 23.0673 19.8623 23.3721C19.1026 23.6674 18.2257 23.8734 16.9502 23.9297C15.6698 23.9859 15.2616 24 12.002 24C8.7424 24 8.3341 23.9859 7.05371 23.9297C5.77823 23.8734 4.906 23.6674 4.1416 23.3721C3.35368 23.0673 2.68258 22.655 2.0166 21.9893C1.34593 21.3235 0.938452 20.6527 0.628906 19.8604C0.333454 19.1009 0.126615 18.2243 0.0703125 16.9492C0.0140332 15.6693 1.15195e-06 15.2611 0 12.0029C0 8.74466 0.0140409 8.33619 0.0703125 7.05176C0.126594 5.77649 0.333428 4.90387 0.628906 4.13965C0.938436 3.35215 1.34602 2.68128 2.0166 2.01562C2.68256 1.34525 3.35391 0.937349 4.14648 0.62793C4.90617 0.332656 5.78317 0.126566 7.05859 0.0703125C8.339 0.0140506 8.74719 0 12.0068 0ZM12 6C8.68745 6 6 8.68745 6 12C6 15.3125 8.68745 18 12 18C15.3125 18 18 15.3125 18 12C18 8.68745 15.3125 6 12 6ZM12 8.1084C14.149 8.1084 15.8916 9.85095 15.8916 12C15.8916 14.149 14.149 15.8916 12 15.8916C9.85095 15.8916 8.1084 14.149 8.1084 12C8.1084 9.85095 9.85095 8.1084 12 8.1084ZM18.5 4C17.6743 4 17 4.66938 17 5.5C17 6.32573 17.6694 7 18.5 7C19.3257 7 20 6.33062 20 5.5C20 4.67427 19.3257 4 18.5 4Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link href={"https://www.youtube.com/@ensodevelopmentro"}>
                  <svg
                    className="w-[27rem] h-[19rem] sm:w-[54rem] sm:h-[38rem] opacity-60"
                    viewBox="0 0 27 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 0C13.5 0 21.9379 0.000431214 24.0488 0.567383C24.6221 0.723556 25.1446 1.02722 25.5635 1.44824C25.9823 1.86932 26.2829 2.39317 26.4355 2.9668C26.9975 5.07496 27 9.46042 27 9.5C27 9.5 27.0001 13.9165 26.4355 16.0342C26.2829 16.6078 25.9823 17.1317 25.5635 17.5527C25.1446 17.9738 24.6221 18.2774 24.0488 18.4336C21.9379 19.0005 13.5 19.001 13.5 19.001C13.4709 19.001 5.05844 18.9996 2.95117 18.4336C2.37791 18.2774 1.85535 17.9738 1.43652 17.5527C1.01769 17.1317 0.717103 16.6078 0.564453 16.0342C-9.54981e-05 13.9165 0 9.5 0 9.5C1.14642e-05 9.46043 0.00252539 5.07498 0.564453 2.9668C0.717064 2.3932 1.01777 1.86931 1.43652 1.44824C1.85532 1.02725 2.37795 0.723567 2.95117 0.567383C5.05844 0.00141292 13.4709 1.69715e-06 13.5 0ZM11 13L18 9L11 5V13Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
