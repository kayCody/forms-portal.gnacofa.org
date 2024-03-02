
import React from 'react'

export default function Modal() {
  return (
    <div className='modal fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm border-2 flex justify-center items-center' id='mod_id'>
      <div className='bg-white p-2 rounded-lg w-[330px] lg:w-[500px] h-[150px] flex justify-center items-center '>
        <div>
          <div className='flex justify-center items-center pt-2 gap-x-3'>
            <h1>Applicants Info Submitted successfully to the database</h1>
            <p className='text-center text-green text-3xl'><span class="material-symbols-outlined">done_all</span></p>
            <button  className='flex items-center justify-center gap-x-2 text-white p-2 rounded bg-green-600 hover:bg-green-800'><ion-icon name="checkmark-sharp" ></ion-icon><a href="/">ok</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}
