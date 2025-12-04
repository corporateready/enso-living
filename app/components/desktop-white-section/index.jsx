"use client";
import React from "react";
import styles from "./styles.module.scss";
import Penthouse from "./penthouse";
import Delux from "./duplex";
import Apartment from "./apartment";
import DesktopSlider from "../desktop-slider"
import DesktopLocation from "../desktop-location"
const Index = () => {
  return (
    <div className={styles.section}>
      <Penthouse />
      <Delux />
      <Apartment />
      <DesktopSlider />
      <DesktopLocation />
    </div>
  );
};

export default Index;
