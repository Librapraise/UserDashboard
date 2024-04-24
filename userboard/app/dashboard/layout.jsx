import React from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Navbar from '../ui/dashboard/navbar/navbar';
import styles from '../ui/dashboard/dashboard.module.css';
import Footer from '../ui/dashboard/footer/footer';


export default function layout({ children }) {
  return (
    <div className={`${styles.container}  `}>
        <div className={`${styles.menu} p-4`}>
            <Sidebar />
        </div>
        <div className={`${styles.content} p-4`}>
            <Navbar />
            { children }
            <div className='mt-2'>
              <Footer />
            </div>
        </div>
    </div>
  )
}
