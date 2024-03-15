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

      <div id="home" className="flex flex-col items-center text-center text-white z-0 px-4 pt-28">
        <p className=" text-4xl font-mono font-semibold shadow-black [text-shadow:_1px_1px_10px_var(--tw-shadow-color)] "> Hello, I am Aritra Pal</p>
        <p className="text-xl font-mono font-medium pt-2 ">An aspiring Software Engineer.</p>
      </div>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}
