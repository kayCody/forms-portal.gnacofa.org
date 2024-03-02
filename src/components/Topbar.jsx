import React from 'react'
import logo from '../assets/icons/logo.ico';

export default function Topbar() {
  return (
    <div className=''>
      <div className='lg:container lg:mx-auto'>
        <div class="">
          <div className="flex justify-center">
            <img src={logo} className="w-32 h-32" alt="logo" />
          </div>
        </div>
        <h1 class="text-red-900 text-center font-bold space-y-6 lg:text-5xl md:text-2xl">Gnacofa Member Registrations Portal</h1>
        <p class="text-center"><span class="text-red-600 font-bold">Note:</span> Make Sure all required fields are correctly filled in.</p>
       
      </div>
    </div>
  )
}
