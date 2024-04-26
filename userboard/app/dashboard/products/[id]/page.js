import React from 'react';
import "./id.css"
import Image from 'next/image';
import { updateProduct } from '@/app/lib/actions';

const SingleProductPage = async ({ params}) => {

    const { id } = params;
    const product = await fetchProduct(id);


  return (
    <div className='flex gap-12 mt-5'>
        <div className='infocontainer font-bold p-5 rounded-[10px]'>
            <div className='relative w-full h-[300px] mb-5 overflow-hidden'>
                <Image src="/noavatar.png" alt='' fill className='object-cover rounded-[5px]'/>
            </div>
            Iphone
        </div>

        <div className='formcontainer '>
            <form action={ updateProduct } className='flex flex-col'>
                <input type='hidden' name='id' value="id" />    
                <label>Title</label>
                <input type='text' name='username' placeholder='samsung mobile' />
                <label>Price</label> 
                <input type='number' name='price' placeholder='$100.00' />
                <label>Stock</label>
                <input type='number' name='stock' placeholder='xxx' />
                <label>COlor</label>
                <input type='text' name='color' placeholder='choose color' />
                <label>Size</label>
                <input type='text' name='size' placeholder='size' />
                <label>Category</label>
                <select name='cat' id='cat'>
                    <option value="general">Choose Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="computer">Computers</option>
                </select>
                <label>Description</label>
                <textarea name='desc' id='desc' placeholder='Enter description' rows={5}></textarea>
                <button type='submit' className='w-full p-3 bg-[teal] rounded-[5px] mt-4'>Update</button>
            </form>
        </div>
    </div>
  )
}


export default SingleProductPage;