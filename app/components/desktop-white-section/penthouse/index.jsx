import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Index = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.inner__header}>
            <div className={styles.inner__image}>
              <Image
                src={"/desktop-penthouse-inner.avif"}
                alt="enso living penthouse"
                loading="eager"
                priority={true}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
              />
            </div>
            <div className={styles.head__content}>
              <p className={styles.title__text}>
                Penthouse{""}
                <br />
                triplex
              </p>
              <p className={styles.description__text}>
                Cel mai exclusivist penthouse {""}
                <br />
                din Brașov, dispus în 3 niveluri — {""}
                <br />o capodoperă arhitecturală ce {""}
                <br />
                oferă liniște de la altitudine
              </p>
              <button type="button" className={styles.offer__btn}>
                <span className={styles.span__text}>Vezi Penthouse-ul</span>
                <svg
                  className="w-[61rem] h-[61rem]"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="30.6089"
                    cy="30.6089"
                    r="30.1089"
                    stroke="white"
                  />
                  <path
                    d="M40.6029 29.7412C40.8585 30.0245 41 30.3924 41 30.774C41 31.1555 40.8585 31.5235 40.6029 31.8067C38.9844 33.5485 35.3005 36.9395 31 36.9395C26.6995 36.9395 23.0156 33.5485 21.3971 31.8067C21.1415 31.5235 21 31.1555 21 30.774C21 30.3924 21.1415 30.0245 21.3971 29.7412C23.0156 27.9995 26.6995 24.6084 31 24.6084C35.3005 24.6084 38.9844 27.9995 40.6029 29.7412Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.9988 33.857C32.7014 33.857 34.0816 32.4768 34.0816 30.7742C34.0816 29.0716 32.7014 27.6914 30.9988 27.6914C29.2962 27.6914 27.916 29.0716 27.916 30.7742C27.916 32.4768 29.2962 33.857 30.9988 33.857Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.inner__list_item}>
              <svg
                className="w-[25rem] h-[27rem]"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8138 6.39284C18.5809 4.75276 17.8086 3.25657 16.6367 2.1755C15.4648 1.09442 13.9711 0.5 12.4262 0.5C10.8813 0.5 9.38748 1.09442 8.21561 2.1755C7.04375 3.25657 6.27136 4.75276 6.03846 6.39284C4.56957 6.39284 3.16084 7.01946 2.12218 8.13486C1.08351 9.25025 0.5 10.7631 0.5 12.3405C0.5 13.9179 1.08351 15.4307 2.12218 16.5461C3.16084 17.6615 4.56957 18.2881 6.03846 18.2881C6.72843 18.2955 7.41274 18.1539 8.05077 17.8718C8.56592 18.618 9.23669 19.2243 10.0093 19.642C10.782 20.0598 11.635 20.2774 12.5 20.2774C13.365 20.2774 14.218 20.0598 14.9907 19.642C15.7633 19.2243 16.4341 18.618 16.9492 17.8718C17.5873 18.1539 18.2716 18.2955 18.9615 18.2881C20.4304 18.2881 21.8392 17.6615 22.8778 16.5461C23.9165 15.4307 24.5 13.9179 24.5 12.3405C24.5 10.7631 23.9165 9.25025 22.8778 8.13486C21.8392 7.01946 20.4304 6.39284 18.9615 6.39284H18.8138Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.58252 12.3408L12.3518 15.3146V26.2186"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.3525 15.3146L15.1218 12.3408"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.item__text}>
                <span className={styles.span__text}>Grădină privată interioară</span> {""}
                <br />un sanctuar verde unde toate cele 4
                anotimpuri prind viață
              </span>
            </div>
            <div className={styles.inner__list_item}>
              <svg
                className="w-[25rem] h-[27rem]"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5 20.2842C24.5 23.5681 19.1277 26.219 12.5 26.219C5.87231 26.219 0.5 23.5681 0.5 20.2842"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.115 10.3914C17.115 13.1215 13.4227 17.3155 12.4997 17.3155C11.5766 17.3155 7.88428 13.1215 7.88428 10.3914C7.88428 6.43487 12.4997 0.5 12.4997 0.5C12.4997 0.5 17.115 6.43487 17.115 10.3914Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.58593 7.20697C6.27762 6.29677 3.87059 5.70512 1.42285 5.44629C1.42285 5.44629 2.06901 13.1418 4.69054 15.9312C6.5367 17.9095 11.8721 18.0282 12.5182 17.3358"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4142 7.20697C18.7225 6.29677 21.1296 5.70512 23.5773 5.44629C23.5773 5.44629 22.9312 13.1418 20.3096 15.9312C18.4635 17.9095 13.1281 18.0282 12.4819 17.3358"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.item__text}>
              <span className={styles.span__text}>Zonă jacuzzi:</span> momente de răsfăț la înălțime, cu priveliști line
                spre orizontul montan
              </span>
            </div>
            <div className={styles.inner__list_item}>
              <svg
                className="w-[25rem] h-[27rem]"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.9985 3.16376L21.4418 8.07985C21.388 8.19355 21.36 8.31917 21.36 8.44657C21.36 8.57398 21.388 8.6996 21.4418 8.8133L24.3513 12.9761C24.4349 13.0953 24.4855 13.2372 24.4971 13.3857C24.5088 13.5341 24.4811 13.6831 24.4173 13.8155C24.3535 13.9479 24.2561 14.0584 24.1362 14.1343C24.0164 14.2103 23.879 14.2485 23.7398 14.2448H18.8843C18.7653 14.2485 18.6486 14.2807 18.5428 14.339C18.437 14.3974 18.3447 14.4803 18.2728 14.5818L15.5671 18.7446C15.4877 18.8663 15.3781 18.9617 15.2505 19.02C15.123 19.0783 14.9827 19.0972 14.8456 19.0745C14.7086 19.0518 14.5802 18.9884 14.4751 18.8915C14.3701 18.7946 14.2925 18.6682 14.2513 18.5265L12.8058 13.5708C12.7728 13.4483 12.7113 13.3368 12.6271 13.2466C12.5428 13.1565 12.4385 13.0907 12.324 13.0554L7.69095 11.5092C7.55851 11.4651 7.44029 11.3822 7.34973 11.2698C7.25917 11.1574 7.1999 11.0201 7.17866 10.8735C7.15743 10.7269 7.17507 10.5768 7.2296 10.4404C7.28412 10.304 7.37333 10.1867 7.4871 10.1018L11.453 7.10852C11.5478 7.03158 11.6254 6.93289 11.6799 6.81968C11.7344 6.70648 11.7645 6.58165 11.768 6.45437V1.26076C11.7732 1.12435 11.8112 0.991681 11.8784 0.875595C11.9456 0.75951 12.0396 0.663944 12.1514 0.598151C12.2633 0.532357 12.3891 0.498565 12.5167 0.500047C12.6444 0.501528 12.7695 0.538233 12.8799 0.606608L16.7717 3.71881C16.8705 3.79221 16.9842 3.83946 17.1034 3.8567C17.2226 3.87393 17.3439 3.86064 17.4574 3.81792L22.0533 2.1528C22.1851 2.10325 22.3273 2.09455 22.4636 2.1277C22.5998 2.16085 22.7245 2.23451 22.8233 2.34018C22.9221 2.44585 22.9909 2.57923 23.0219 2.72495C23.0529 2.87066 23.0448 3.02278 22.9985 3.16376V3.16376Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.62 13.2549L0.5 26.2191"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.item__text}>
              <span className={styles.span__text}>Design personalizabil:</span> un interior conceput individual, ca o
                expresie a stilului tău autentic
              </span>
            </div>
            <div className={styles.inner__list_item}>
              <svg
                className="w-[25rem] h-[27rem]"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 22.2613C0.5 22.2613 4.1923 18.3047 12.5 18.3047C20.8076 18.3047 24.4999 22.2613 24.4999 22.2613"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.499 18.3047V26.2178"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.19238 26.218L10.6539 18.3643"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.8072 26.218L14.3457 18.3643"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.11192 14.3487C6.08379 14.0197 6.08379 13.6886 6.11192 13.3595C6.11192 11.5232 6.79269 9.76204 8.00445 8.46354C9.21622 7.16504 10.8597 6.43555 12.5734 6.43555C14.2871 6.43555 15.9307 7.16504 17.1424 8.46354C18.3542 9.76204 19.035 11.5232 19.035 13.3595C19.0631 13.6886 19.0631 14.0197 19.035 14.3487"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 13.3594H2.34615"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.19238 4.45703L5.11546 5.44617"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.499 0.5V2.47828"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.8069 4.45703L19.8838 5.44617"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.5004 13.3594H22.6543"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.item__text}>
              <span className={styles.span__text}>Vederi uimitoare:</span> o perspectivă panoramică de 360° asupra
                orașului și munților
              </span>
            </div>
            <div className={styles.inner__list_item}>
              <svg
                className="w-[25rem] h-[27rem]"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5 17.8304L17.5031 7.9387C17.3315 7.75328 17.1273 7.6061 16.9023 7.50566C16.6773 7.40523 16.436 7.35352 16.1923 7.35352C15.9486 7.35352 15.7073 7.40523 15.4823 7.50566C15.2573 7.6061 15.0532 7.75328 14.8815 7.9387L0.5 26.2185H24.5"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.23535 16.3271L10.9492 18.3055C11.2619 18.544 11.6361 18.6722 12.02 18.6722C12.4038 18.6722 12.7781 18.544 13.0907 18.3055L14.7338 16.98C15.0534 16.7232 15.4421 16.5843 15.8415 16.5843C16.241 16.5843 16.6296 16.7232 16.9492 16.98L18.5923 18.3055C18.9031 18.5396 19.2739 18.6652 19.6538 18.6652C20.0338 18.6652 20.4045 18.5396 20.7154 18.3055L23.4477 16.3271"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.11538 10.3917C7.66439 10.3917 9.73077 8.17734 9.73077 5.44583C9.73077 2.71433 7.66439 0.5 5.11538 0.5C2.56638 0.5 0.5 2.71433 0.5 5.44583C0.5 8.17734 2.56638 10.3917 5.11538 10.3917Z"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.item__text}>
              <span className={styles.span__text}>Terasă de 252 m<sup>2</sup></span> un spațiu amplu în aer liber, creat
                pentru dimineți calme și seri memorabile
              </span>
            </div>
          </div>
        </div>
        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
            <Image
              src={"/penthouse-title.avif"}
              alt="hero mobile background"
              loading="eager"
              priority={true}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
