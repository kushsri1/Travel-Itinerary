import React from 'react'

const IntroSection = () => {
  return (
    <div className='flex flex-row justify-between md:px-20 px-8 md:py-16 py-10'>
        <div className="intro-text text-white text-2xl">
            <h1 className='text-[24px] font-[800]'>Hello Chhavi!</h1>
            <h2 className='text-[16px] font-[500]'>Ready for the trip?</h2>
        </div>
        <div className="cursor-pointer intro-image flex justify-center items-center">
            <div className='flex justify-center items-center text-[20px] text-white h-[40px] w-[40px] bg-[#FF7339] rounded-[19px] p-[8px]'>C</div>
    </div>
    </div>
  )
}

export default IntroSection
