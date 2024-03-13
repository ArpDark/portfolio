"use client"

import React,{useState,Fragment} from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  

  return (
    <div className="flex flex-col relative h-fit overflow-y-auto bg-gradient-to-br from-gray-700 via-gray-400 to-gray-700">
      <Navbar/>

      <div id="home" className="flex flex-col items-center text-center text-white z-0 mt-20 py-10">
        <p className=" text-4xl font-mono font-semibold "> Hello, I am Aritra Pal</p>
        <p className="text-xl font-mono font-medium pt-2">An aspiring Software Engineer.</p>
      </div>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}
