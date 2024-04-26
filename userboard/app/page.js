import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-[100vh] justify-center items-center">
      <h1 className="uppercase bg-[#182237] rounded-[10px] font-bold text-[42px] text-[#b7bac1] p-5">welcome to my userdashboard project</h1>
      <Link href="/dashboard">
        <button className="outline-none w-full bg-[teal] p-4 outline-none rounded-[10px] font-bold my-10">Go to Dashboard</button>
      </Link>
      <div className="bg-[#182237] rounded-[10px] p-4 flex flex-col items-center ">
        <h2 className="capitalize text-[20px]">feel free to interact with the dashboard, click buttons and fill forms</h2>
        <p className="text-[20px] text-[coral]">Note: The form data are not being stored anywhere</p>
        <p className="italic text-[16px]">Login page is coming soon...</p>
      </div>
    </div>
  );
}
