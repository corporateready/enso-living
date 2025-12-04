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
              src={"/penthouse-title.avif"}
              alt="hero mobile background"
              loading="eager"
              priority={true}
              fill
            />
          </div>
          <div className={styles.premium__title_content}>
            <p className={styles.premium__title_text}>Penthouse triplex</p>
            <p className={styles.premium__title_description}>
              Cel mai exclusivist penthouse din Brașov,{""}
              <br /> dispus în 3 niveluri — o capodoperă arhitecturală{""}
              <br /> ce oferă liniște de la altitudine
            </p>
          </div>
        </div>
        <div className={styles.premium__content}>
          <div className={styles.premium__inner_image}>
            <Image
              src={"/penthouse-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              fill
            />
            <div className={styles.box__dekor}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4997 9.73047V11.5766C12.4997 11.8214 12.4024 12.0562 12.2293 12.2293C12.0562 12.4024 11.8214 12.4997 11.5766 12.4997H9.73047"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.73047 0.5H11.5766C11.8214 0.5 12.0562 0.597252 12.2293 0.770363C12.4024 0.943473 12.4997 1.17826 12.4997 1.42308V3.26923"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 3.26923V1.42308C0.5 1.17826 0.597252 0.943473 0.770363 0.770363C0.943473 0.597252 1.17826 0.5 1.42308 0.5H3.26923"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.26923 12.4997H1.42308C1.17826 12.4997 0.943473 12.4024 0.770363 12.2293C0.597252 12.0562 0.5 11.8214 0.5 11.5766V9.73047"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.73047 3.26953V5.11569"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.26953 3.26953V5.11569"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.49985 4.19238V7.42315H5.11523"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.19238 9.26953C4.81511 9.86105 5.64119 10.1909 6.50008 10.1909C7.35896 10.1909 8.18504 9.86105 8.80777 9.26953"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.span}>Acces controlat prin Face ID</span>
            </div>
          </div>
          <div className={styles.inner__list}>
            <div className={styles.inner__list_item}>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.34197 3.29516C9.22953 2.51722 8.85662 1.80753 8.29084 1.29474C7.72506 0.781951 7.00386 0.5 6.25798 0.5C5.5121 0.5 4.7909 0.781951 4.22512 1.29474C3.65934 1.80753 3.28643 2.51722 3.17398 3.29516C2.4648 3.29516 1.78466 3.59239 1.28319 4.12146C0.781723 4.65053 0.5 5.3681 0.5 6.11632C0.5 6.86454 0.781723 7.58211 1.28319 8.11118C1.78466 8.64024 2.4648 8.93747 3.17398 8.93747C3.5071 8.94097 3.83749 8.87381 4.14553 8.73999C4.39425 9.09396 4.7181 9.38155 5.09113 9.5797C5.46416 9.77785 5.87599 9.88106 6.29363 9.88106C6.71127 9.88106 7.12311 9.77785 7.49614 9.5797C7.86917 9.38155 8.19302 9.09396 8.44173 8.73999C8.74978 8.87381 9.08016 8.94097 9.41328 8.93747C10.1225 8.93747 10.8026 8.64024 11.3041 8.11118C11.8055 7.58211 12.0873 6.86454 12.0873 6.11632C12.0873 5.3681 11.8055 4.65053 11.3041 4.12146C10.8026 3.59239 10.1225 3.29516 9.41328 3.29516H9.34197Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.88477 6.11621L6.22176 7.52679V12.6989"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.22168 7.52679L7.55867 6.11621"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className={styles.item__text}>
                <span>Grădină privată interioară</span> un sanctuar verde {""}
                <br />
                unde toate cele 4 anotimpuri prind viață
              </p>
            </div>
            <div className={styles.inner__list_item}>
              <svg
                width="19"
                height="16"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0872 9.88379C12.0872 11.4415 9.49343 12.6989 6.29359 12.6989C3.09374 12.6989 0.5 11.4415 0.5 9.88379"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.52106 5.19187C8.52106 6.48683 6.73842 8.47618 6.29276 8.47618C5.8471 8.47618 4.06445 6.48683 4.06445 5.19187C4.06445 3.31512 6.29276 0.5 6.29276 0.5C6.29276 0.5 8.52106 3.31512 8.52106 5.19187Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.40462 3.68086C3.29017 3.24912 2.12805 2.96848 0.946289 2.8457C0.946289 2.8457 1.25825 6.49598 2.52393 7.81909C3.41525 8.75746 5.99117 8.81377 6.30313 8.48533"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.18269 3.68086C9.29714 3.24912 10.4593 2.96848 11.641 2.8457C11.641 2.8457 11.3291 6.49598 10.0634 7.81909C9.17206 8.75746 6.59614 8.81377 6.28418 8.48533"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className={styles.item__text}>
                <span>Zonă jacuzzi</span>: momente de răsfăț la înălțime, cu
                priveliști line spre orizontul montan
              </p>
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
                  d="M11.3628 1.76354L10.6112 4.09544C10.5853 4.14937 10.5717 4.20896 10.5717 4.26939C10.5717 4.32983 10.5853 4.38942 10.6112 4.44335L12.0159 6.41795C12.0563 6.47446 12.0807 6.54179 12.0863 6.61221C12.092 6.68263 12.0786 6.75329 12.0478 6.8161C12.017 6.87891 11.97 6.93133 11.9121 6.96734C11.8542 7.00336 11.7879 7.02151 11.7207 7.01973H9.37646C9.31901 7.0215 9.26267 7.03678 9.21157 7.06444C9.16048 7.0921 9.11593 7.13145 9.0812 7.17958L7.77489 9.15417C7.73657 9.21189 7.68362 9.25716 7.62204 9.28482C7.56046 9.31249 7.49274 9.32144 7.42656 9.31067C7.36038 9.29989 7.29841 9.26982 7.24768 9.22387C7.19696 9.17792 7.15952 9.11794 7.13962 9.05074L6.44173 6.70003C6.42581 6.64192 6.39611 6.58901 6.35542 6.54626C6.31474 6.5035 6.26439 6.47229 6.2091 6.45556L3.97226 5.72213C3.90831 5.70122 3.85124 5.66188 3.80751 5.60857C3.76379 5.55527 3.73518 5.49014 3.72492 5.42059C3.71467 5.35104 3.72319 5.27987 3.74951 5.21516C3.77584 5.15045 3.81891 5.0948 3.87384 5.05453L5.78857 3.6347C5.83437 3.59821 5.8718 3.55139 5.89813 3.49769C5.92445 3.444 5.93899 3.38478 5.94068 3.32441V0.860862C5.94317 0.796157 5.96153 0.733225 5.99396 0.678161C6.02639 0.623097 6.07181 0.577766 6.1258 0.546557C6.17979 0.515348 6.24054 0.499319 6.30216 0.500022C6.36378 0.500725 6.42418 0.518136 6.47752 0.550568L8.35646 2.02682C8.40416 2.06163 8.45905 2.08405 8.5166 2.09222C8.57416 2.1004 8.63273 2.09409 8.68752 2.07383L10.9065 1.28399C10.9701 1.26049 11.0388 1.25636 11.1045 1.27209C11.1703 1.28781 11.2305 1.32275 11.2782 1.37288C11.3259 1.423 11.3591 1.48627 11.3741 1.55539C11.3891 1.6245 11.3851 1.69666 11.3628 1.76354V1.76354Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.35157 6.5498L0.5 12.6993"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className={styles.item__text}>
                <span>Design personalizabil</span>: un interior conceput {""}
                <br />
                individual, ca o expresie a stilului tău autentic
              </p>
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
                  d="M0.5 10.8229C0.5 10.8229 2.28267 8.94629 6.29369 8.94629C10.3047 8.94629 12.0874 10.8229 12.0874 10.8229"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.29199 8.94629V12.6996"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.28223 12.6988L5.40191 8.97363"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3033 12.6988L7.18359 8.97363"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.20843 7.06772C3.19485 6.91166 3.19485 6.75462 3.20843 6.59856C3.20843 5.72756 3.53711 4.89224 4.12216 4.27635C4.70722 3.66046 5.50072 3.31445 6.32811 3.31445C7.1555 3.31445 7.949 3.66046 8.53406 4.27635C9.11911 4.89224 9.44779 5.72756 9.44779 6.59856C9.46137 6.75462 9.46137 6.91166 9.44779 7.06772"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 6.59961H1.39134"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.28223 2.37695L2.7279 2.84611"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.29199 0.5V1.43832"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3041 2.37695L9.8584 2.84611"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0866 6.59961H11.1953"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className={styles.item__text}>
                <span>Vederi uimitoare</span>: o perspectivă panoramică{""}
                <br />
                de 360° asupra orașului și munților
              </p>
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
                  d="M12.0872 8.71954L8.7091 4.02758C8.62624 3.93962 8.52766 3.86981 8.41904 3.82217C8.31043 3.77453 8.19393 3.75 8.07626 3.75C7.95859 3.75 7.84209 3.77453 7.73348 3.82217C7.62486 3.86981 7.52628 3.93962 7.44342 4.02758L0.5 12.6983H12.0872"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.2334 8.00781L5.54365 8.9462C5.6946 9.05936 5.8753 9.12017 6.06061 9.12017C6.24592 9.12017 6.42663 9.05936 6.57758 8.9462L7.37086 8.31748C7.52515 8.19566 7.7128 8.1298 7.90566 8.1298C8.09851 8.1298 8.28617 8.19566 8.44045 8.31748L9.23373 8.9462C9.38382 9.05726 9.5628 9.11685 9.74624 9.11685C9.92969 9.11685 10.1087 9.05726 10.2588 8.9462L11.5779 8.00781"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.72831 5.19196C3.95897 5.19196 4.95662 4.14163 4.95662 2.84598C4.95662 1.55033 3.95897 0.5 2.72831 0.5C1.49765 0.5 0.5 1.55033 0.5 2.84598C0.5 4.14163 1.49765 5.19196 2.72831 5.19196Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className={styles.item__text}>
                <span>Terasă de 252 m²</span> un spațiu amplu în aer liber,{""}
                <br /> creat pentru dimineți calme și seri memorabile
              </p>
            </div>
          </div>
          <button type="button" className={styles.hero__btn}>
            <span className={styles.span__text}>
            Vezi Penthouse-ul
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
