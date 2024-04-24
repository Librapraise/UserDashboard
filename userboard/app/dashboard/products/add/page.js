import React from 'react'
import "./addproducts.css"

export default function AddProductPage() {
  return (
    <div className='mt-4 bg-[#182237] p-4 rounded-lg'>
        <form action='' className='flex flex-wrap justify-between'>
          <input className='w-[45%]' type='text' placeholder='title' name='title' required />

          <select name='cat' id='cat' className='w-[45%] '>
              <option value="general">Choose a category</option>
              <option value="kitchen">Kitchen</option>
              <option value="phone">Phone</option>
              <option value="computer">Computer</option>
          </select>

          <input className='w-[45%]' type='number' placeholder='price' name='price' required />
          <input className='w-[45%]' type='number' placeholder='stock' name='stock' required />
          <input className='w-[45%]' type='text' placeholder='color' name='color' required />
          <input className='w-[45%]' type='text' placeholder='size' name='size' required />
          <textarea
            name='desc'
            id='desc'
            rows="16"
            placeholder='description' 
            className='w-full'         
          ></textarea>
          <button className='w-full bg-[teal] p-3 rounded-lg cursor-pointer' type='submit'>Submit</button>
        </form>
    </div>
  )
}
