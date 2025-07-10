
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Amenities } from "@/components/Amenities";
import { Rates } from "@/components/Rates";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <Rates />
      <Contact />
    </div>
  );
};

export default Index;
