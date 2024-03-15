"use client";

import React,{Fragment} from "react";
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, Transition } from '@headlessui/react';

export default function Navbar(){
    return(
        <div className="flex fixed w-full h-16 bg-gray-700 bg-opacity-80 items-center md:justify-normal z-50 ">

          <div className="hidden md:visible md:flex w-full justify-between items-center">

            <div className="flex w-1/2 justify-around ">

              <Link href="/#home" className=" font-medium text-white shadow-white hover:underline hover:[text-shadow:_0_0.5px_2px_var(--tw-shadow-color)]">HOME</Link>
              <Link href="/#about" className=" text-white shadow-white hover:underline hover:[text-shadow:_0_0.5px_2px_var(--tw-shadow-color)]">ABOUT</Link>

              <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1L6jlMV1tppedZ8Rrc7DKPk0_GNXL1kjM/view?usp=sharing" className=" text-white shadow-white hover:underline hover:[text-shadow:_0_0.5px_2px_var(--tw-shadow-color)]">RESUME</a>

              <Link href="/#projects" className=" text-white shadow-white hover:underline hover:[text-shadow:_0_0.5px_2px_var(--tw-shadow-color)]">PROJECTS</Link>
              <Link href="/#contact" className=" text-white shadow-white hover:underline hover:[text-shadow:_0_0.5px_2px_var(--tw-shadow-color)]">CONTACT</Link>

            </div>
            <div className=" flex justify-around w-1/5">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ArpDark">
                <img className=" h-10 w-10 bg-white p-1 rounded-md shadow-sm  hover:shadow-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aritra-pal-6760b8188/">
                <img className=" h-10 w-10 bg-white p-1 rounded-md shadow-sm  hover:shadow-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ARITRA1004">
                <img className=" h-10 w-10 bg-white p-1 rounded-md shadow-sm hover:shadow-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" />
              </a>
            </div>

          </div>
          <div className="md:hidden w-full">
            <Menu as="div" className="flex  text-left justify-end">
              <div >
                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent mr-4 ">
                  <MenuIcon sx={{fontSize:36 ,color:'white'}}/>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-250"
                enterFrom="transform opacity-0 scale-0"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-250"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-0"
              >
                <Menu.Items className="absolute z-10 mt-14 w-full origin-top-right bg-opacity-80 bg-gray-700 shadow-lg ">
                  <div className="">
                    <Menu.Item>
                        <Link href="/#home" className="text-white block px-4 py-2 text-sm">
                          HOME
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/#about" className="text-white block px-4 py-2 text-sm">
                          ABOUT
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1L6jlMV1tppedZ8Rrc7DKPk0_GNXL1kjM/view?usp=sharing" className="text-white block px-4 py-2 text-sm">
                          RESUME
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/#projects" className="text-white block px-4 py-2 text-sm">
                          PROJECTS
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/#contact" className=' text-white block px-4 py-2 text-sm'>
                          CONTACT
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <div  className="border border-gray-500 mx-4"></div>
                    </Menu.Item>

                    <div className="flex mt-6 justify-around pb-6 ">
                      <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ArpDark">
                          <img className=" h-10 w-10 bg-white p-1 rounded-md shadow-sm  hover:shadow-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aritra-pal-6760b8188/">
                          <img className=" h-10 w-10 bg-white p-1 rounded-md shadow-sm  hover:shadow-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ARITRA1004">
                          <img className=" h-10 w-10 bg-white p-1 rounded-md shadow-sm hover:shadow-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" />
                        </a>
                      </Menu.Item>
                    </div>

                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
      </div>
    );
}