import React from 'react';
import "./id.css"
import Image from 'next/image';

export default function SingleUserPage() {
  return (
    <div className='flex gap-12 mt-5'>
        <div className='infocontainer font-bold p-5 rounded-[10px]'>
            <div className='relative w-full h-[300px] mb-5 overflow-hidden'>
                <Image src="/noavatar.png" alt='' fill className='object-cover rounded-[5px]'/>
            </div>
            John Libra
        </div>

        <div className='formcontainer '>
            <form action='' className='flex flex-col'>
                <label>Username</label>
                <input type='text' name='username' placeholder='John Doe' />
                <label>Email</label> 
                <input type='email' name='email' placeholder='johndoe@gmail.com' />
                <label>Password</label>
                <input type='password' name='password' placeholder='John Doe' />
                <label>Phone</label>
                <input type='phone' name='phone' placeholder='+234' />
                <label>Address</label>
                <input type='text' name='address' placeholder='address' />
                <label>IsAdmin?</label>
                <select name='isAdmin' id='isAdmin'>
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>
                </select>
                <label>IsActive?</label>
                <select name='isActive' id='isActive'>
                    <option value={true}>YES</option>
                    <option value={false}>NO</option>
                </select>
                <button type='submit' className='w-full p-3 bg-[teal] rounded-[5px] mt-4'>Update</button>
            </form>
        </div>
    </div>
  )
}
