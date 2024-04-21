"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

export default function Rightbar() {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 


  return (
    <div className={`sticky top-0 z-10 ${isSticky ? `fixed w-full left-0 top-0 z-[10]` : ''}`}>
        <div className='relative bg-gradient-to-t from-[#182237] to-[#253352] p-5 rounded-lg mb-2'>
          <div className='absolute bottom-0 right-0 w-[50%] h-[50%]'>
            <Image src="/astronaut.png" alt='' fill className='oject-cover opacity-20'/>
          </div>

          <div className='flex flex-col gap-5'>
            <span className='font-bold'>🔥 Available Now</span>
            <h3 className="font-medium text-[12px] text-[#b7bac1]">
              How to use the new version of the admin dashboard?
            </h3>
            <span className="text-[12px] font-medium text-[#b7bac1]">Takes 4 minutes to learn</span>
            <p className="text-[#b7bac1] text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius libero perspiciatis recusandae possimus.
            </p>
            <button className="flex p-3 items-center gap-3 max-w-max bg-[#5d57c9] text-white outline-none rounded-sm cursor-pointer">
              <MdPlayCircleFilled />
              Watch
            </button>
          </div>
        </div>

        <div className='bg-gradient-to-t from-[#182237] to-[#253352] p-5 rounded-lg'>
          <div className='flex flex-col gap-5'>
            <span className='font-bold'>🚀 Coming Soon</span>
            <h3 className="font-medium text-[12px] text-[#b7bac1]">
              New server actions are available, partial pre-rendering is coming up!
            </h3>
            <span className="text-[12px] font-medium text-[#b7bac1]">Boost your productivity</span>
            <p className="text-[#b7bac1] text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius libero perspiciatis recusandae possimus.
            </p>
            <button className="flex p-3 items-center gap-3 max-w-max bg-[#5d57c9] text-white outline-none rounded-sm cursor-pointer">
              <MdReadMore />
              Learn
            </button>
          </div>
        </div>
    </div>
  )
}
