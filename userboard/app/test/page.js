import React from 'react'

export default function Page() {

    const handleForm = async (formData) => {
        "use server"
        console.log(formData);
        const username = formData.get("username")
        console.log('hello', username);
    }

  return (
    <div>
        <form action={handleForm} className='flex gap-2 m-2'>
            <input type='text' name='username' className='bg-[transparent] border-[2px] p-2'></input>
            <button className='bg-[teal] p-2 max-w-max'>Send</button>
        </form>
    </div>
  )
}
