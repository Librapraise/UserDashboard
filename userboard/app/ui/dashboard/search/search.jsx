"use client";

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { MdSearch } from 'react-icons/md';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();


  const handleSearch = useDebouncedCallback((e) => {
      const params = new URLSearchParams(searchParams);

      params.set("page", 1)

      if (e.target){
       e.target.value.length > 2 && params.set("q", e.target.value);
      } else {
        params.delete("q");
      }

      replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className='flex items-center gap-2 max-w-max bg-[#2e374a] p-2 rounded-lg '>
      <MdSearch />
      <input 
        type='text' 
        placeholder={placeholder} 
        className='bg-transparent outline-none' 
        onChange={handleSearch}
      />
    </div>
  );
}