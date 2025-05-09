import Image from 'next/image'
import React from 'react'
import image from "../../public/images/UpcomingTrips/image.png"
import vectorUpcoming from "../../public/images/UpcomingTrips/Vector.png"
import TimeImage from "../../public/images/UpcomingTrips/Time.png"
import peopleImage from "../../public/images/UpcomingTrips/.png"
import saveImage from "../../public/images/UpcomingTrips/mdi_planner-outline.png"

const UpcomingTrip = () => {
  return (
    <div className='md:px-20 px-8 flex flex-col gap-5 bg-[#0B0809] pb-10'>
      <h1 className='text-[16px] font-[500] text-white'>Your Upcoming Trip</h1>
      <div className='flex justify-center items-center w-full relative'>
        <Image src={image} width={400} height={50} alt='' className='rounded-3xl md:w-full w-full md:h-[350px] h-[300px]' />

        <div className='absolute top-0 z-50 h-full w-full px-5 py-2 flex flex-col justify-between'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col  text-white'>
        <h1 className='font-[900] text-[40px]'>TOKYO</h1>
        <span className='font-[600] text-[20px]'>27.01.2025 - 02.02.2025</span>
        </div>
        <div>
        <Image src={vectorUpcoming} width={40} height={40} alt="" />
        </div>
        </div>
        <div className='flex justify-between px-4'>
          <div className='flex items-center gap-1'>
            <Image src={TimeImage} width={40} height={20} alt='' className='w-6 h-6 md:w-10 md:h-10 bg-[#292929] p-[3px] md:p-2 rounded-full'/>
            <div className='flex flex-col text-white gap-'>
              <h2 className='text-[12px] md:text-[16px] font-[700]'>8 Days</h2>
              <h3 className='text-[12px] md:text-[16px] font-[400]'>Duration</h3>
            </div>
          </div>

          <div className='flex items-center gap-1'>
            <Image src={peopleImage} width={40} height={20} alt='' className='w-6 h-6 md:w-10 md:h-10 p-[3px] md:p-2 bg-[#292929] rounded-full'/>
            <div className='flex flex-col text-white gap-'>
              <h2 className='text-[12px] md:text-[16px] font-[700]'>4 (2M,2F)</h2>
              <h3 className='text-[12px] md:text-[16px] font-[400]'>Group Size</h3>
            </div>
          </div>

          <div className='flex items-center gap-1'>
            <Image src={saveImage} width={40} height={20} alt='' className='w-6 h-6 md:w-10 md:h-10 p-[3px] md:p-2 bg-[#292929] rounded-full'/>
            <div className='flex flex-col text-white gap-'>
              <h2 className='text-[12px] md:text-[16px] font-[700]'>14</h2>
              <h3 className='text-[12px] md:text-[16px] font-[400]'>Activities</h3>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingTrip
