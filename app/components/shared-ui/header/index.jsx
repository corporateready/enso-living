"use client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button type="button" className={styles.logo} onClick={handleBack}>
          <Image
            src="/enso-header-logo.png"
            alt="enso logo"
            width={117}
            height={44}
          />
        </button>
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
  );
};
export default Index;
