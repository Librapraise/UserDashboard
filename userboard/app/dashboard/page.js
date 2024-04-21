import React from 'react';
import Card from '../ui/dashboard/card/card';
import Rightbar from '../ui/dashboard/rightbar/rightbar';
import Chart from '../ui/dashboard/chart/chart';
import Transactions from '../ui/dashboard/transactions/transactions';
import styles from "../ui/dashboard/dashboard.module.css";

export default function page() {
  return (
    <div className='wrapper flex gap-5 mt-5'>
      <div className={`${styles.main} flex flex-col gap-5`}>
        <div className={`${styles.card} flex flex-1 justify-between items-center gap-5`}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>

      <div className={`${styles.side} flex-1`}>
        <Rightbar />
      </div>
    </div>
  )
}
