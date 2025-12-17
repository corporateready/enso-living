"use client";
import React, {useState} from "react";
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
import Design from "./components/design"
import Develolper from "./components/developer"
import Landscape from "./components/landscape";
import Location from "./components/location";
import DesktopBrownSection from "./components/desktop-brown-section/"
import Lux from "./components/lux"
import DesktopWhiteSection from "./components/desktop-white-section"
import Footer from "./components/footer";
import {HeroForm} from "./components/hero-form"

export default function Home() {
  
const[isOpen, setIsOpen] = useState(false)

const handlerFormOpen = () => {
  setIsOpen(!isOpen)
}
  return (
    <div className="flex h-full w-full items-center justify-center overflow-x-hidden">
      <main className="w-full h-full relative">
        <Hero handlerFormOpen={handlerFormOpen}/>
        <DesktopBrownSection handlerFormOpen={handlerFormOpen}/>
        <Lux />
        <DesktopWhiteSection handlerFormOpen={handlerFormOpen}/>
        <div>
          <Premium handlerFormOpen={handlerFormOpen}/>
          <Multy />
          <Comercial handlerFormOpen={handlerFormOpen}/>
          <Bistro handlerFormOpen={handlerFormOpen}/>
          <Facility />
          <Landmark />
          <Penthouse handlerFormOpen={handlerFormOpen}/>
          <Duplex handlerFormOpen={handlerFormOpen}/>    
          <Apartment handlerFormOpen={handlerFormOpen}/>
          <Design />
          <Develolper />
          <Landscape />
          <Location handlerFormOpen={handlerFormOpen}/>
        </div>

        <Footer />
        {
          isOpen && <HeroForm handlerFormOpen={handlerFormOpen} />
        }
      </main>
    </div>
  );
}
