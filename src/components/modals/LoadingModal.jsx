import React from 'react'

export default function LoadingModal() {
  return (
    <div className='modal fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm border-2 flex justify-center items-center' id='mod_id'>
      <div className='bg-white p-2 rounded-lg w-[330px] lg:w-[500px] h-[150px] flex justify-center items-center '>
        <div>
          <h1>Loading ..... </h1>
          <div className='flex justify-center items-center pt-2 gap-x-3'>
            <img src="" alt="giff" />
          </div>
        </div>
      </div>
    </div>
  )
}
