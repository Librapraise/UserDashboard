import React from 'react';
import "./login.css";
import LoginForm from '../ui/login/loginForm/loginForm';

export default function LoginPage() {
  return (
    <div className='flex flex-col w-full h-[100vh] justify-center items-center'>
      <LoginForm />
    </div>
  )
}
