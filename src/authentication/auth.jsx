import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const navigate = useNavigate
  const [formData, setFormData] = useState({ token: '', });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const handleInputChange = (e) => {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }))
    // Check if all required fields are filled
    setIsButtonActive();
  }
  const handleSubmit = () => {
    // redirect to member registration page upon successful authentication of otp-token
    navigate('/register')
  }
  return (
    <section className='h-screen bg-gray-100 flex flex-col justify-center items-center gap-y-3'>
      <div className='lg:w-[500px] md:w-[400px] rounded-lg bg-white shadow-lg px-7 py-7'>
        <div className=''>
          <form action="#" method='POST' onSubmit={handleSubmit}>
            <h1 className='text-xl font-semibold mb-5 text-center'>OTP - Login Screen</h1>
            <div className='space-y-4 text-sm'>
              <div className='space-y-3'>
                <div className='space-y-4'>
                  <div className='flex items-center gap-x-1 rounded border'>
                    {/* <span class="material-symbols-outlined">security_key </span> */}
                    <input type="text" name="token" maxlength='6' value={formData.password} onChange={handleInputChange} placeholder='Enter OTP - Token' className='w-full px-3 py-1' />
                  </div>
                  <small className='text-center'></small>
                </div> 
              </div>
            </div>
            {/* submission button */}
            <div className='flex justify-center'>
              <button type='submit' className='rounded bg-green-600 hover:bg-green-800 p-2 text-white w-44 mt-5 gap-2 flex justify-center items-center text-center disabled:bg-gray-400' disabled={!isButtonActive}>Authenticate</button>
            </div>
          </form>
        </div>
      </div>
      <div className='flex justify-between lg:gap-x-20'>
        <p><a className='items-center text-blue-400 hover:text-blue-700' href="www.gnacofa.org">Request for Access Token</a></p>
        <p><a className='items-center text-blue-400 hover:text-blue-700' href="#">Need help?</a></p>
      </div>
    </section>
  )
}
