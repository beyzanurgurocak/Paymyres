import React from "react";
import Header from "./components/Header";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import styles from "./styles.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import "./i18n";

function Home() {
  const { t } = useTranslation();
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <img
            className={styles.chevron}
            src={chevronDown}
            alt="Chevron Down"
          />
        </>
      }
      className={styles.item}
      buttonProps={{
        className: ({ isEnter }) =>
          `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
      }}
      contentProps={{ className: styles.itemContent }}
      panelProps={{ className: styles.itemPanel }}
    />
  );

  return (
    <>
      <Header />
      <section className="container mx-auto space-y-4 py-8 px-2 max-w-6xl">
        <h1 className="text-center text-3xl mb-16">{t("home.features")}</h1>
        <div className="flex  flex-col sm:flex-row gap-2">
          <div className="flex flex-col gap-y-4 border-2 border-black/10 shadow-xl rounded-xl py-8 px-2">
            <div className="space-y-4">
              <h2 className="text-xl" style={{ color: "darkseagreen" }}>
                {t("home.crm-modüle")}
              </h2>
              <p>{t("home.crm-modüle-description")}</p>
            </div>
            <div>
              <img src="./images/crm.webp" alt="crm modül" className="h-auto" />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 border-2 border-black/10 shadow-xl rounded-xl py-8 px-2">
            <div className="space-y-4">
              <h2 className="text-xl" style={{ color: "darkseagreen" }}>
                {t("home.collection-modüle")}
              </h2>
              <p>{t("home.collection-modüle-description")}</p>
            </div>
            <div>
              <img
                src="./images/tahsilat.webp"
                alt="crm modül"
                className="h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 border-2 border-black/10 shadow-xl rounded-xl py-8 px-2">
            <div className="space-y-4">
              <h2 className="text-xl" style={{ color: "darkseagreen" }}>
                {t("home.cancellation")}
              </h2>
              <p>{t("home.cancellation-description")}</p>
            </div>
            <div>
              <img
                src="./images/iptal.webp"
                alt="crm modül"
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto space-y-4 py-8 px-2 max-w-6xl">
        <h1 className="text-center text-3xl mb-16">
          {t("home.frequently-asked-questions")}
        </h1>
        <div className={styles.accordion}>
          <Accordion>
            <AccordionItem header="What is Lorem Ipsum?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>

            <AccordionItem header="Where does it come from?">
              Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
              erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae,
              accumsan auctor mi.
            </AccordionItem>

            <AccordionItem header="Why do we use it?">
              Suspendisse massa risus, pretium id interdum in, dictum sit amet
              ante. Fusce vulputate purus sed tempus feugiat.
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section className="container mx-auto space-y-4 py-8 px-2 max-w-6xl">
        <h1 className="text-center text-3xl mb-16">{t("home.our-references")}</h1>
        <OwlCarousel className="owl-theme" loop nav={false} dots={false}>
          <div className="custom-item">
            <img
              src="./images/references/carettalogo.png"
              alt="caretta logo"
              style={{ width: "200px", height: "100px" }}
            />
          </div>
          <div className="custom-item">
            <img
              src="./images/references/carettarelaxlogo.png"
              alt="caretta logo"
              style={{ width: "200px", height: "100px" }}
            />
          </div>
          <div className="custom-item">
            <img
              src="./images/references/doganaylogo.png"
              alt="doğanay logo"
              style={{ width: "200px", height: "100px" }}
            />
          </div>
          <div className="custom-item">
            <img
              src="./images/references/longbeachlogo.png"
              alt="longbeach logo"
              style={{ width: "200px", height: "100px" }}
            />
          </div>
          <div className="custom-item">
            <img
              src="./images/references/marakeshlogo.png"
              alt="marakesh logo"
              style={{ width: "200px", height: "100px" }}
            />
          </div>
          <div className="custom-item">
            <img
              src="./images/references/ramadalogo.png"
              alt="ramada logo"
              style={{ width: "200px", height: "100px" }}
            />
          </div>
          <div className="custom-item">
            <img
              src="./images/references/soguthotellogo.png"
              alt="söğüt logo"
              style={{ width: "200px", height: "100px" }}
            />
          </div>
        </OwlCarousel>
      </section>
      <Footer />
    </>
  );
}

export default Home;
