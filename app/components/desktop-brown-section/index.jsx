"use client";
import React from "react";
import styles from "./styles.module.scss";
import Premium from "./premium";
import Multy from "./multy"
import Comercial from "./comercial"
import Bistro from "./bistro"
import Facility from "./facility"

const Index = () => {
  return (
    <div className={styles.section}>
      <Premium />
      <Multy />
      <Comercial />
      <Bistro />
      <Facility />
    </div>
  )
}

export default Index;