import React from 'react'

export default function Challenge() {
  return (
    <div className='p-2 basis-1/3'>
      <div className='flex flex-col items-center overflow-hidden border border-gray-300 border-solid rounded-md'>
        <div className='overflow-hidden'>
          <a href='#'>
            <img
              src='https://via.placeholder.com/700x513'
              alt=''
              className='transition ease-in-out duration-0 hover:scale-125 hover:duration-150'
            />
          </a>
        </div>

        <div className='w-full bg-gray-100'>
          <a href='#' className='hover:underline'>
            <h2 className='my-4 text-2xl text-center text-gray-800 md:text-xl'>
              Lorem ipsum dolor sit amet.
            </h2>
          </a>
        </div>
      </div>
    </div>
  )
}
