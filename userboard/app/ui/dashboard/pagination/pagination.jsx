"use client";

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import "./pagination.css"

const Pagination = ({ count }) => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className='flex justify-between items-center mt-4'>
        <button 
          className='bg-[#cccc] cursor-pointer px-3 py-1 max-w-max rounded-[5px]' 
          disabled={!hasPrev} 
          onClick={() => handleChangePage("prev")}
        >
          Previous
        </button>
        <button 
          className='bg-[white] text-[black] cursor-pointer px-3 py-1 max-w-max rounded-[5px]' 
          disabled={!hasNext}
          onClick={() => handleChangePage("next")}
        >Next
        </button>
    </div>
  )
}


export default Pagination;