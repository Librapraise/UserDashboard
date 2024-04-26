"use client"


import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuLink({ item }) {

  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${ pathname === item.path && `bg-[#2e374a] rounded-lg` } flex py-3 px-4 items-center gap-2 hover:bg-[#2e374a] rounded-lg my-2`}>
        {item.icon}
        {item.title}
    </Link>
  )
}
