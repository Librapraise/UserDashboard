"use client"


import React from 'react';
import Link from 'next/link';
import styles from './menuLinks.module.css';
import { usePathname } from 'next/navigation';

export default function MenuLink({ item }) {

  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${styles.container} ${ pathname === item.path && `bg-[#2e374a] rounded-lg` } flex py-3 px-4 items-center gap-2 hover:bg-[#2e374a] rounded-lg my-2`}>
        {item.icon}
        {item.title}
    </Link>
  )
}
