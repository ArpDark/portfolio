"use client"

import React,{useState} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="flex flex-col relative h-dvh overflow-y-auto ">
      <div className="flex fixed w-full h-20 border-2 bg-gray-700 items-center justify-end md:justify-normal ">
        <div className="hidden md:visible md:flex w-1/2 justify-around border-2 border-yellow-300 h-fit ">
          <a href="" className=" font-medium text-white  ">HOME</a>
          <a href="" className=" text-white">ABOUT</a>
          <a href="" className=" text-white">RESUME</a>
          <a href="" className=" text-white">PROJECTS</a>
          <a href="" className=" text-white">CONTACT</a>
        </div>

        <div className=" md:hidden border-2 border-green-500 ">
          <Button id="basic-button" aria-controls={open?'basic-menu':undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} >
            <MenuIcon/>
          </Button>
          <Menu id="basic-menu" anchorEl={anchorEl} open={open}onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button'}} sx={{width:200}}>
            <MenuItem >
              <a href="">HOME</a>
            </MenuItem>
            <MenuItem >
              <a href="">ABOUT</a>
            </MenuItem>
            <MenuItem >
              <a href="">RESUME</a>
            </MenuItem>
            <MenuItem >
              <a href="">PROJECTS</a>
            </MenuItem>
            <MenuItem >
              <a href="">CONTACT</a>
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div className="border-2 border-blue-400">
        Hello
      </div>
    </div>
  );
}
