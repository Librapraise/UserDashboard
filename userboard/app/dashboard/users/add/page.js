import React from 'react'
import "./user.css"

export default function AddUsersPage() {
  return (
    <div className='mt-4 bg-[#182237] p-4 rounded-lg'>
        <form action='' className='flex flex-wrap justify-between'>
          <input className='w-[45%]' type='text' placeholder='username' name='username' required />
          <input className='w-[45%]' type='email' placeholder='email' name='email' required />
          <input className='w-[45%]' type='password' placeholder='password' name='password' required />
          <input className='w-[45%]' type='phone' placeholder='phone' name='phone' />

          <select name='cat' id='cat' className='w-[45%] '>
              <option value={false}>Is admin?</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
          </select>

          <select name='cat' id='cat' className='w-[45%] '>
              <option value={false}>Is active?</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
          </select>
          <textarea
            name='address'
            id='address'
            rows="3"
            placeholder='address' 
            className='w-full'         
          ></textarea>
          <button className='w-full bg-[teal] p-3 rounded-lg cursor-pointer' type='submit'>Submit</button>
        </form>
    </div>
  )
}
