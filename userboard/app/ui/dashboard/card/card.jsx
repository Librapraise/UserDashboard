import React from 'react';
import { MdSupervisedUserCircle } from "react-icons/md";



export default function Card() {
  return (
    <div className='flex bg-[#182237] p-5 rounded-lg gap-3 w-full hover:bg-[#2e374a]'>
        <MdSupervisedUserCircle size={24} />
        <div className={`flex flex-col gap-4`}>
          <span className="span1">Total Users</span>
          <span className="text-[24px] font-medium">10.273</span>
          <span className="text-[11px] font-light"><span className='text-[lime]'>12%</span> more than previous week</span>
        </div>
    </div>
  )
}
