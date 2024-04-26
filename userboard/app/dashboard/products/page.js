import React from 'react';
import Search from '@/app/ui/dashboard/search/search';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Link from 'next/link';
import Image from 'next/image';
import { fetchProducts } from '@/app/lib/data';
import "../users/users.css"
import { deleteProduct } from '@/app/lib/actions';



const Products = async ({ searchParams }) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  //const { count, products } = await fetchProducts(q, page);
  const products  = await fetchProducts(q, page);


  return (
    <div className='mt-4 bg-[#182237] p-4 rounded-lg'>
      <div className='flex justify-between items-center'>
        <Search placeholder={`search for a product...`}/>
        <Link href='/dashboard/products/add'>
          <button className='p-3 bg-[#5d57c9] outline-none rounded-[5px] text-[white] cursor-pointer'>Add New</button>
        </Link>
      </div>

      <table className={`w-full mt-3`}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='flex items-center gap-2'>
              <Image src="/noproduct.jpg" className='rounded-full' alt='' width={40} height={40}/>
              Iphone
            </td>
            <td>hergdjhfklgdjkfs</td>
            <td>$123</td>
            <td>Apr 22 2024</td>
            <td>33</td>
            <td className='space-x-2 flex'>
              <div className='flex gap-2'>
                <Link href="/dashboard/products/test">
                  <button className='bg-[teal] cursor-pointer px-3 py-1 max-w-max rounded-[10px]'>View</button>
                </Link>
                <form action={deleteProduct} >
                  <input type='hidden' name='id' value="id" />
                  <button className='bg-[crimson] cursor-pointer px-3 py-1 max-w-max rounded-[10px]'>Delete</button>
                </form>
              </div>
            </td>
          </tr>

          <tr>
            <td className='flex items-center gap-2'>
              <Image src="/noproduct.jpg" className='rounded-full' alt='' width={40} height={40}/>
              Lg Monitor
            </td>
            <td>Janrkfjdufikjladjfs</td>
            <td>$234</td>
            <td>Apr 22 2024</td>
            <td>55</td>
            <td className='space-x-2'>
              <div className='flex gap-2'>
                <Link href="/dashboard/products/test">
                  <button className='bg-[teal] cursor-pointer px-3 py-1 max-w-max rounded-[10px]'>View</button>
                </Link>
                <form action={deleteProduct} >
                  <input type='hidden' name='id' value="id" />
                  <button className='bg-[crimson] cursor-pointer px-3 py-1 max-w-max rounded-[10px]'>Delete</button>
                </form>
              </div>
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

export default Products;