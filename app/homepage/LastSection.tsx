import React from 'react'

import containerImage1 from "../../public/images/LastSection/day.png"
import containerImage2 from "../../public/images/LastSection/image(3).png"
import containerImage3 from "../../public/images/LastSection/image 9.png"
import Image from 'next/image'


let ListContainer = [
    {
        frontImage: containerImage1,
        name: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
        timing: "8:15 am Morning",
        duration: "3 hours",
        pickUp: "From Hotel",
    },
    {
        frontImage: containerImage2,
        name: "Tokyo Sky Tree",
        timing: "1:00 pm Afteroon",
        duration: "3 hours",
        pickUp: "From Nakamise Street",
    },
    {
        frontImage: containerImage3,
        name: "Kimono Wearing",
        timing: "Anytime before 8:00pm ",
        duration: "1-2 hours",
        pickUp: "From Hotel",
    }]

const LastSection = () => {
  return (
    <div className='bg-[#0B0809] md:px-20 px-8 py-3'>
      <div className='border-[#D3F462] border-[1px] p-2 rounded-md'>
      {ListContainer.map((list, index)=> (
        <div className=''>
        <div key={index} className='flex flex-col py-3 rounded-xl'>
        <div className='flex flex-row gap-5 bg-[#4D4D4D] rounded-2xl'>
          <div className=''>
            <Image src={list.frontImage} width={300} height={100} alt='' className='object-cover h-full rounded-l-2xl' />
          </div>
          <div className='flex flex-col gap-2 text-white text-[16px] md:text-[20px] justify-center'>
            <h1 className='font-[700]'>{list.name}</h1>
            <h1><span className='font-[700]'>Timing: </span>{list.timing}</h1>
            <h1><span className='font-[700]'>Duration: </span>{list.duration}</h1>
            <h1><span className='font-[700]'>Pick up: </span>{list.pickUp}</h1>
          </div>
        </div>
        </div>
        </div>
        
      ))}
    </div>
    </div>
  )
}

export default LastSection
