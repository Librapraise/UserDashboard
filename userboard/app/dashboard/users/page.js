
import React from 'react'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import "./users.css";
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import { fetchUsers } from '@/app/lib/data';




const UsersPage = async ({ searchParams }) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  //const { count, users } = await fetchUsers(q, page);
  const users  = await fetchUsers(q, page);

  return (
    <div className='mt-4 bg-[#182237] p-4 rounded-lg'>
      <div className='flex justify-between items-center'>
        <Search placeholder={`search for a user...`}/>
        <Link href='/dashboard/users/add'>
          <button className='p-3 bg-[#5d57c9] outline-none rounded-[5px] text-[white] cursor-pointer'>Add New</button>
        </Link>
      </div>

      <table className={`w-full mt-3`}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='flex items-center gap-2'>
              <Image src="/noavatar.png" className='rounded-full' alt='' width={40} height={40}/>
              John Delaney
            </td>
            <td>hello@gmail.com</td>
            <td>Apr 22 2024</td>
            <td>client</td>
            <td>passive</td>
            <td className='space-x-2'>
              <Link href="/dashboard/users/test">
                <button className='bg-[teal] cursor-pointer px-3 py-1 max-w-max rounded-[10px]'>View</button>
              </Link>
              <Link href="/">
                <button className='bg-[crimson] cursor-pointer px-3 py-1 max-w-max rounded-[10px]'>Delete</button>
              </Link>
            </td>
          </tr>

          <tr>
            <td className='flex items-center gap-2'>
              <Image src="/noavatar.png" className='rounded-full' alt='' width={40} height={40}/>
              Jane Doe
            </td>
            <td>Jane@gmail.com</td>
            <td>Apr 22 2024</td>
            <td>Admin</td>
            <td>active</td>
            <td className='space-x-2'>
              <Link href="/dashboard/users/test">
                <button className='bg-[teal] cursor-pointer px-3 py-1 max-w-max rounded-[10px]'>View</button>
              </Link>
              <Link href="/">
                <button className='bg-[crimson] cursor-pointer px-3 py-1 max-w-max rounded-[10px]'>Delete</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 
      <Pagination count={count}/>
      */}
      <Pagination />
    </div>
  )
}


export default UsersPage;