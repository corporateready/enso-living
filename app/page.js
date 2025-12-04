"use client";
import React from "react";
import Hero from "./components/hero";
import Premium from "./components/premium";
import Multy from "./components/multy";
import Comercial from "./components/comercial";
import Bistro from "./components/bistro";
import Facility from "./components/facility";
import Landmark from "./components/landmark";
import Penthouse from "./components/penthouse";
import Duplex from "./components/duplex";
import Apartment from "./components/apartment";
import Landscape from "./components/landscape";
import Location from "./components/location";
import DesktopBrownSection from "./components/desktop-brown-section/"
import Lux from "./components/lux"
import DesktopWhiteSection from "./components/desktop-white-section"
import Footer from "./components/footer";

export default function Home() {

  return (
    <div className="flex h-full w-full items-center justify-center">
      <main className="w-full h-full">
        <Hero />
        <DesktopBrownSection />
        <Lux />
        <DesktopWhiteSection />
        <div>
          <Premium />
          <Multy />
          <Comercial />
          <Bistro />
          <Facility />
          <Landmark />
          <Penthouse />
          <Duplex />    
          <Apartment />
          <Landscape />
          <Location />
        </div>

        <Footer />
      </main>
    </div>
  );
}
