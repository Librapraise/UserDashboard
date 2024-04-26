"use client"


import React from 'react';
import styles from "./navbar.module.css";
import { usePathname } from 'next/navigation';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import Search from '../search/search';



export default function Navbar() {

  const pathname = usePathname()

  return (
    <div className={`flex justify-between items-center p-4 bg-[#182237] rounded-lg`}>

      <div className={`${styles.title} text-[#b7bac1] capitalize font-bold`}>
        { pathname.split("/").pop()}
      </div>

      <div className={`${styles.menu} flex items-center gap-4`}>
        <div className={`${styles.search} flex items-center gap-2 w-full bg-[#2e374a] p-2 rounded-lg `}>
        <Search placeholder={`search...`}/>
        </div>

        <div className={`${styles.icon} flex items-center gap-3 cursor-pointer`}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>

    </div>
  )
}
