'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import locationImage from "../../public/images/Onboarding/akar-icons_location.png"
import calenderImage from "../../public/images/Onboarding/uil_calendar.png"

const Page = () => {
  const [selectedCompanion, setSelectedCompanion] = useState<string>('')

  return (
    <div className='bg-[#0B0809] h-[120vh] md:px-10 px-8 py-3 text-white flex flex-col w-full'>
      <div className='text-white text-center md:text-start py-5'>
        <h1 className='md:text-[28px] text-[20px] font-[700]'>Plan Your Journey, Your Way!</h1>
        <span className='font-[400] md:text-[20px] text-[#F5F5F5]'>Let’s create your personalised travel experience</span>
      </div>

      <div className="form-section flex flex-col gap-5">
        
        {/* Destination */}
        <div className='flex flex-col md:items-start items-center gap-2'>
          <h2 className='text-start md:text-[20px] font-[600] text-[16px]'>Where would you like to go?</h2>
          <div className='flex flex-row bg-[#333333] rounded-md pl-2 items-center'>
            <Image src={locationImage} alt='' width={32} height={32} />
            <input type="text" name="location" id="location" placeholder='Enter Destination'
              className='px-2 py-2 bg-[#333333] outline-none placeholder:text-white font-[600] rounded-r-xl md:max-w-lg' />
          </div>
        </div>

        <div className='flex flex-col md:items-start items-center gap-2'>
          <h2 className='text-start md:text-[20px] font-[600] text-[16px]'>How long will you stay?</h2>
          <div className='flex flex-row bg-[#333333] rounded-md pl-2 items-center'>
            <Image src={calenderImage} alt='' width={32} height={32} />
            <select className='px-2 py-2 bg-[#333333] text-white outline-none font-[600] rounded-r-xl md:max-w-lg w-full'>
              <option value="">Select Duration</option>
              <option value="1day">1 Day</option>
              <option value="3days">3 Days</option>
              <option value="1week">1 Week</option>
              <option value="2weeks">2 Weeks</option>
              <option value="1month">1 Month</option>
            </select>
          </div>
        </div>

        {/* Travel Companion */}
        <div className='flex flex-col md:items-start items-center gap-2'>
          <h2 className='text-start md:text-[20px] font-[600] text-[16px]'>Who are you traveling with?</h2>
          <div className='flex flex-wrap text-white font-[600] gap-5'>
            {['Solo', 'Partner', 'Family', 'Friends'].map(option => (
              <button
                key={option}
                className={`bg-[#333333] px-5 py-2 rounded-md border-2 ${
                  selectedCompanion === option ? 'border-[#D3F462]' : 'border-transparent'
                }`}
                onClick={() => setSelectedCompanion(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

      </div>
      <div className='flex justify-start md:items-end items-center text-white py-6 w-full'>
      <button className='bg-[#3643FB] px-5 py-2 rounded-md md:max-w-md w-full'>Continue</button>
      </div>
    </div>
  )
}

export default Page
