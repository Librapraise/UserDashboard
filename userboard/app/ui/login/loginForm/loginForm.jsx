"use client";

import React from 'react';
//import useFormState from "react-dom"
import "./loginform.css";
//import { authenticate } from '@/app/lib/actions';


{/*
const LoginForm = () => {

  const [state, formAction] = useFormState(authenticate, undefined)

  return (
    <>
        <form action={formAction} className='flex flex-col bg-[#182237] rounded-[10px] w-[500px] h-[500px] justify-center items-center p-10 gap-6'>
            <h1 className='font-bold text-[24px]'>Login</h1>
            <input type='text' name='username' placeholder='Enter username' />
            <input type='password' name='password' placeholder='Enter password' />
            <button type='submit' className='w-full bg-[teal] p-4 outline-none rounded-[10px] font-bold'>Login</button>
            {state && state}
        </form>
    </>
  )
}
*/}

const LoginForm = () => {

  return (
    <>
        <form action="" className='flex flex-col bg-[#182237] rounded-[10px] w-[500px] h-[500px] justify-center items-center p-10 gap-6'>
            <h1 className='font-bold text-[24px]'>Login</h1>
            <input type='text' name='username' placeholder='Enter username' />
            <input type='password' name='password' placeholder='Enter password' />
            <button type='submit' className='w-full bg-[teal] p-4 outline-none rounded-[10px] font-bold'>Login</button>
        </form>
    </>
  )
}

export default LoginForm;