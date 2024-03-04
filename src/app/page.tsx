"use client"

import React,{useState,Fragment} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, Transition } from '@headlessui/react'
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  

  return (
    <div className="flex flex-col relative h-fit overflow-y-auto ">
      <div className="flex fixed w-full h-16 bg-gray-700 items-center md:justify-normal z-10 ">
        <div className="hidden md:visible md:flex w-1/2 justify-around border-2 border-yellow-300 h-fit ">
          <a href="#" className=" font-medium text-white  ">HOME</a>
          <a href="#" className=" text-white">ABOUT</a>
          <a href="#" className=" text-white">RESUME</a>
          <a href="#" className=" text-white">PROJECTS</a>
          <a href="#" className=" text-white">CONTACT</a>
        </div>

        <div className="md:hidden w-full">
          <Menu as="div" className="flex  text-left justify-end">
            <div >
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent ">
                <MenuIcon sx={{fontSize:36 ,color:'white'}}/>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 mt-14 w-full origin-top-right bg-gray-700 shadow-lg ">
                <div className="">
                  <Menu.Item>
                      <a href="#home" className="text-white block px-4 py-2 text-sm">
                        HOME
                      </a>
                  </Menu.Item>
                  <Menu.Item>
                      <a href="#about" className="text-white block px-4 py-2 text-sm">
                        ABOUT
                      </a>
                  </Menu.Item>
                  <Menu.Item>
                      <a href="#" className="text-white block px-4 py-2 text-sm">
                        RESUME
                      </a>
                  </Menu.Item>
                  <Menu.Item>
                      <a href="#projects" className="text-white block px-4 py-2 text-sm">
                        PROJECTS
                      </a>
                  </Menu.Item>
                  <Menu.Item>
                      <a href="#contact" className=' text-white block px-4 py-2 text-sm'>
                        CONTACT
                      </a>
                  </Menu.Item>
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      <div id="home" className="flex border-2 border-blue-400 z-0 mt-20">
        Hello, I am Aritra Pal, an aspiring full stack Web developer.
      </div>
      <div id="about" className="flex flex-col border-2 border-blue-400 z-0">
        <div className="">
          I am from India.I am currently pursuing B.Tech in Computer Science and Engineering. I am currently learning web development and ML. I like to code and play games.
        </div>
        <div id="skills" className="">
          <p>My Skills</p>
          <div className="flex flex-col md:flex-row border-2 border-red-500 justify-evenly">
            <div className="grid grid-cols-3 md:grid-cols-4 border-2 border-yellow-400 gap-x-12 gap-y-8" >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" width="50" height="50"/>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-8 border-2 border-green-400 gap-x-12 gap-y-8 ">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" width="50" height="50"  />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" width="50" height="50" />        
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg"  width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" width="50" height="50" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg" width="50" height="50" />
            </div>
          </div>
        </div>
      </div>
      <div id="Projects" className="flex border-2 border-blue-400 z-0">
        Hello
      </div>
      <div id="Contact" className="flex border-2 border-blue-400 z-0">
        Hello
      </div>
    </div>
  );
}
