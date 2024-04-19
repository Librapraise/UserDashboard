import React from 'react'
import Link from 'next/link';
import styles from './menuLinks.module.css';

export default function MenuLink({ item }) {
  return (
    <Link href={item.path} className={`${styles.container} flex py-3 px-4 items-center gap-2`}>
        {item.icon}
        {item.title}
    </Link>
  )
}
