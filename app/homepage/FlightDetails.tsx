import React from 'react'
import vectorLeft from "../../public/images/FlightDetails/Vector (1).png"
import Image from 'next/image'


const FlightDetails = () => {
  return (
    <div className='bg-[#0B0809]'>
    <div className='bg-[#3643FB] md:mx-20 mx-8 p-2 rounded-xl'>
      <div className='bg-[#313DDF] rounded-xl flex flex-col gap-5'>

        <div className='flex flex-row items-center justify-between w-full px-3'>
            <div className='text-white'>
                <h1 className='font-[700]'>Flight Details</h1>
                <h2 className='font-[400]'>26.01.2025, 10:50 am</h2>
            </div>
            <div>
                <h2 className='text-[#D1F462] font-[800] underline cursor-pointer'>See all</h2>
            </div>
        </div>

        <div className='text-white flex flex-row items-center gap-3 px-3'>
            <div>
            <h1 className='font-[700]'>DEL</h1>
            <h2 className='font-[400]'>Delhi, India</h2>
            </div>

            <Image src={vectorLeft} width={62} height={10} className='w-[50px] h-[30px]' alt='' />

            <div>
            <h1 className='font-[700]'>NRT</h1>
            <h2 className='font-[400]'>Narita, Tokyo</h2>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FlightDetails
