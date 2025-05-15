'use client'
import Link from 'next/link';
import React, { FC, useState } from 'react'
import { GrClose } from 'react-icons/gr';
import { IoMenu } from 'react-icons/io5';


const menuItems = [
    {
        title:"Home",
        url: "/"
    },
    {
        title:"Products",
        url: "/products"
    },
    {
        title:"About",
        url: "/"
    },
]

export interface NavbarMenuProps{
    isSticky?: boolean;
}

const NavbarMenu:FC<NavbarMenuProps> = ({isSticky}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(prev => !prev);
    }

  return (
    <>
    <div className='hidden md:flex gap-5 items-center'>
        {
            menuItems.map((item, index) => <Link href={item.url} key={index} className={`font-semibold uppercase ${isSticky?'text-black':'text-white'}`}>{item.title}</Link>)
        }
    </div>
    
    <button className='block md:hidden relative text-3xl px-2 py-2 bg-amber-200 rounded-full shadow-md hover:cursor-pointer' onClick={toggleSideBar}>
    <IoMenu />
    </button>

    <div className={`w-full fixed top-0 left-0 md:hidden h-screen flex flex-col gap-4 bg-black text-white px-4 pt-4 font-semibold transition-all duration-500 uppercase ${isOpen?'translate-x-0':'-translate-x-full'} `}>
        <div className='w-full flex justify-between'>
            <p>Menu</p>
            <span className='cursor-pointer font-bold hover:text-2xl transition-all' onClick={toggleSideBar}><GrClose />
            </span>
        </div>
        {
            menuItems.map((item, index) => <Link href={item.url} key={index} className='border-b-2 border-gray-500 ' onClick={toggleSideBar}>{item.title}</Link>)
        }
    </div>

    </>
  )
}

export default NavbarMenu