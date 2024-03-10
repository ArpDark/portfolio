"use client";

import React,{Fragment} from "react";
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, Transition } from '@headlessui/react';

export default function Navbar(){
    return(
        <div className="flex fixed w-full h-16 bg-gray-700 items-center md:justify-normal z-50 ">
          <div className="hidden md:visible md:flex w-1/2 justify-around h-fit ">
            <Link href="#" className=" font-medium text-white  ">HOME</Link>
            <Link href="#" className=" text-white">ABOUT</Link>
            <Link href="#" className=" text-white">RESUME</Link>
            <Link href="#" className=" text-white">PROJECTS</Link>
            <Link href="#" className=" text-white">CONTACT</Link>
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
                <Menu.Items className="absolute z-10 mt-14 w-full origin-top-right bg-gray-700 shadow-lg ">
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
                        <Link href="#" className="text-white block px-4 py-2 text-sm">
                          RESUME
                        </Link>
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

                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
      </div>
    );
}