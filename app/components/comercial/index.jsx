import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Index = () => {
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner}>
        <div className={styles.premium__header_inner}>
          <Image
            src={"/comercial-title.avif"}
            alt="hero mobile background"
            loading="eager"
            priority={true}
            width={123}
            height={101}
            className={styles.premium__title_image}
          />
          <div className={styles.premium__title_content}>
            <p className={styles.premium__title_text}>
              Showroom
              <br />
              comercial în incinta
              <br />
              ENSO LIVING
              <br />
              spre închiriere 
            </p>
          </div>
        </div>
        <div className={styles.premium__content}>
          <div className={styles.premium__inner_image}>
            <Image
              src={"/comercial-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              fill
            />
          </div>
          <div className={styles.inner__list}>
            <div className={styles.inner__list_item}>
              <svg
                className="w-[12rem] h-[12rem]"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.51225 0.538223H1.03375C0.916596 0.538223 0.619654 0.452221 0.536817 0.538223C0.453979 0.624225 0.536817 0.875185 0.536817 0.99681V4.66551"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4637 4.66551V0.99681C12.4637 0.875185 12.5466 0.624225 12.4637 0.538223C12.3809 0.452221 12.0839 0.538223 11.9668 0.538223H8.48828"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.48828 12.4613H11.9668C12.0839 12.4613 12.3809 12.5473 12.4637 12.4613C12.5466 12.3753 12.4637 12.1243 12.4637 12.0027V8.33398"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.536817 8.33398V12.0027C0.536817 12.1243 0.453979 12.3753 0.536817 12.4613C0.619654 12.5473 0.916596 12.4613 1.03375 12.4613H4.51225"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.item__text}>
                Spațiu generos de 332 m²,
                <br />
                adaptabil oricărui tip de business
              </span>
            </div>
            <div className={styles.inner__list_item}>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 10V12.5C9.5 12.7652 9.39464 13.0196 9.20711 13.2071C9.01957 13.3946 8.76522 13.5 8.5 13.5H1.5C1.23478 13.5 0.98043 13.3946 0.792893 13.2071C0.605357 13.0196 0.5 12.7652 0.5 12.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H8.5C8.76522 0.5 9.01957 0.605357 9.20711 0.792893C9.39464 0.98043 9.5 1.23478 9.5 1.5V4"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 7H4.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5 5L4.5 7L6.5 9"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.item__text}>
                3 accese independente și vitrină amplă
                <br />
                cu deschidere către stradă
              </span>
            </div>
            <div className={styles.inner__list_item}>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3902 0.93C10.2983 0.797534 10.1758 0.689251 10.033 0.614379C9.89021 0.539506 9.73144 0.500265 9.57022 0.5H3.43022C3.269 0.500265 3.11023 0.539506 2.96746 0.614379C2.82468 0.689251 2.70212 0.797534 2.61022 0.93L1.01022 3.24C0.880286 3.43679 0.824078 3.67317 0.851525 3.90739C0.878972 4.1416 0.988308 4.35858 1.16022 4.52L5.83022 9.24C6.01397 9.40584 6.2527 9.49764 6.50022 9.49764C6.74774 9.49764 6.98647 9.40584 7.17022 9.24L11.8402 4.52C12.0121 4.35858 12.1215 4.1416 12.1489 3.90739C12.1764 3.67317 12.1202 3.43679 11.9902 3.24L10.3902 0.93Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.49969 0.5L4.17969 3.94L6.35969 9.49"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5 0.5L8.82 3.94L6.64 9.49"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.849609 3.94043H12.1496"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 13.5C12.5 12.9696 12.2893 12.4609 11.9142 12.0858C11.5391 11.7107 11.0304 11.5 10.5 11.5H2.5C1.96957 11.5 1.46086 11.7107 1.08579 12.0858C0.710714 12.4609 0.5 12.9696 0.5 13.5V13.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.item__text}>
                Localizare premium, între zona rezidențială și cea
                <br />
                de business, cu expunere către un public select
              </span>
            </div>
        
          </div>
          <button type="button" className={styles.hero__btn}>
            <span className={styles.span__text}>
            Solicită oferta pentru 
            <br />showroom comercial
            </span>
            <svg
              className="w-[50rem] h-[50rem] sm:w-[62rem] sm:h-[62rem]"
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
                d="M25.5315 18.5C25.3486 18.5003 25.1733 18.5722 25.044 18.7C24.9146 18.8278 24.8418 19.0011 24.8415 19.1818V25.3624L22.6613 23.5673C22.5207 23.4517 22.3394 23.396 22.1573 23.4124C21.9752 23.4288 21.8071 23.5159 21.6898 23.6546C21.5729 23.7935 21.5166 23.9726 21.5331 24.1526C21.5497 24.3326 21.6378 24.4987 21.7782 24.6146L25.0899 27.3418C25.1247 27.3662 25.1617 27.3874 25.2003 27.4051C25.2255 27.4218 25.2519 27.4368 25.2793 27.4498C25.3588 27.4829 25.4443 27.5 25.5307 27.5C25.617 27.5 25.7025 27.4829 25.7821 27.4498C25.8088 27.4367 25.8346 27.422 25.8594 27.4057C25.898 27.3879 25.935 27.3667 25.9698 27.3424L29.2815 24.6151C29.3904 24.5256 29.4688 24.4052 29.506 24.2702C29.5432 24.1352 29.5375 23.9922 29.4897 23.8605C29.4418 23.7288 29.3541 23.6148 29.2385 23.5341C29.1228 23.4533 28.9849 23.4097 28.8433 23.4091C28.6819 23.4094 28.5258 23.4653 28.4017 23.5673L26.2215 25.3624V19.1818C26.2212 19.0011 26.1484 18.8278 26.019 18.7C25.8897 18.5722 25.7144 18.5003 25.5315 18.5Z"
                fill="white"
              />
              <path
                d="M30.8636 27.5C30.6869 27.5003 30.5175 27.5706 30.3925 27.6956C30.2676 27.8205 30.1972 27.9899 30.1969 28.1667V29.7667C30.1967 29.8727 30.1544 29.9742 30.0795 30.0492C30.0045 30.1242 29.9029 30.1664 29.7969 30.1667H21.2636C21.1576 30.1664 21.056 30.1242 20.9811 30.0492C20.9061 29.9742 20.8639 29.8727 20.8636 29.7667V28.1667C20.8636 27.9899 20.7934 27.8203 20.6683 27.6953C20.5433 27.5702 20.3738 27.5 20.1969 27.5C20.0201 27.5 19.8506 27.5702 19.7255 27.6953C19.6005 27.8203 19.5303 27.9899 19.5303 28.1667V29.7667C19.5308 30.2262 19.7136 30.6668 20.0386 30.9917C20.3635 31.3166 20.8041 31.4994 21.2636 31.5H29.7969C30.2565 31.4994 30.697 31.3166 31.022 30.9917C31.3469 30.6668 31.5297 30.2262 31.5303 29.7667V28.1667C31.53 27.9899 31.4597 27.8205 31.3347 27.6956C31.2097 27.5706 31.0403 27.5003 30.8636 27.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
