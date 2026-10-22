import React from 'react'

function InputBox({height="h-12",Boxname}) {
  return (
    <div className="my-10  w-[60%] lg:w-[80%] rounded-lg">
    <div className="relative bg-inherit md:px-0">
        <input type="text" required id={Boxname}  name={Boxname} className={`peer bg-transparent ${height} md:w-80 lg:w-96 w-full md:mx-0 mx-[32%] rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600 important`} placeholder="Type inside me"/><label for={Boxname} className="absolute cursor-text  lg:left-12 md:left-6 left-32 sm:left-40 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 py-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all dark:bg-[#050505] bg-[#dee4e7]">{Boxname}</label>
    </div>
</div>
  )
}

export default InputBox