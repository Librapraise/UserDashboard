import React from 'react';
import styles from "./trasactions.module.css";
import Image from "next/image";


export default function Transactions() {
  return (
    <div className='bg-[#182237] p-5 rounded-lg '>
      <h2 className='mb-5 font-extralight text-[#b7bac1]'>Latest Transactions</h2>
      <table className={`${styles.table} w-full`}>
        <thead className=''>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='flex items-center gap-2'>
              <Image src="/noavatar.png" className='rounded-full' alt='' width={40} height={40}/>
              John Doe
            </td>
            <td>
              <span>pending</span>
            </td>
            <td>14.04.2024</td>
            <td>$3,200:00</td>
          </tr>
          <tr>
            <td className='flex items-center gap-2'>
              <Image src="/noavatar.png" className='rounded-full' alt='' width={40} height={40}/>
              John Doe
            </td>
            <td>
              <span>Cancelled</span>
            </td>
            <td>14.04.2024</td>
            <td>$3,200:00</td>
          </tr>
          <tr>
            <td className='flex items-center gap-2'>
              <Image src="/noavatar.png" className='rounded-full' alt='' width={40} height={40}/>
              John Doe
            </td>
            <td>
              <span>Done</span>
            </td>
            <td>14.04.2024</td>
            <td>$3,200:00</td>
          </tr>
          <tr>
            <td className='flex items-center gap-2'>
              <Image src="/noavatar.png" className='rounded-full' alt='' width={40} height={40}/>
              John Doe
            </td>
            <td>
              <span>pending</span>
            </td>
            <td>14.04.2024</td>
            <td>$3,200:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
