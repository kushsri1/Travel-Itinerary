'use client'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardHeader } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import image1 from "../../public/images/Accomodation/image(1).png"
import image2 from "../../public/images/Accomodation/image(2).png"
import reviewImage from "../../public/images/Accomodation/Vector(2).png"
import resultImage from "../../public/images/Accomodation/Group.png"
import resultImage2 from "../../public/images/Accomodation/Vector(3).png"
import Image from "next/image"


let msgs = [
    {
        frontImage: image1,
        review: "4.0 Very Good",
        revImage: reviewImage  ,
        name: "Shinagawa Prince Hotel",
        checkIn: "Check in: 26.01.2025, 11:15 pm",
        checkOut: "Check out: 28.01.2025, 11:15 am",
        duration: "2 nights",
        resultImage: resultImage,
        result: "Confirmed",
    },
    {
        frontImage: image2,
        review: "4.1 Very Good",
        revImage: reviewImage,
        name: "Mercure Tokyo Hotel",
        checkIn: "Check in: 28.01.2025, 06:00 pm",
        checkOut: "Check out: 30.01.2025, 11:15 am",
        duration: "2 nights",
        resultImage: resultImage2,
        result: "Pending",
    },
    {
        frontImage: image1,
        review: "4.1 Very Good",
        revImage: reviewImage,
        name: "Shinagawa Prince Hotel",
        checkIn: "Check in: 26.01.2025, 11:15 pm",
        checkOut: "Check out: 28.01.2025, 11:15 am",
        duration: "2 nights",
        resultImage: resultImage,
        result: "Confirmed",
    }
]

const Accomodation = () => {
  return (
    <div className='py-4 bg-[#0B0809] md:px-20 px-8'>
      <div className='py-2 flex justify-between items-center '>
        <h1 className=' text-white text-[20px] font-[700]'>Accomodation</h1>
        <span className='text-[#D1F462] font-[800] underline cursor-pointer'>See all</span>
      </div>

      <div className="flex justify-center items-center">
      <Carousel plugins={[Autoplay({delay: 3000})]} className="max-w-xs md:max-w-2xl">
      <CarouselContent className="">
        {
            msgs.map((msg, index)=> (
                <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardHeader>
                    <div>
                        <Image src={msg.frontImage} alt="" width={100} height={100} className="rounded-tl-xl rounded-tr-xl object-cover w-full" />
                    </div>
                </CardHeader>
                <CardContent className="bg-[#4D4D4D] rounded-bl-xl rounded-br-xl flex flex-col px-3 py-2">
                  <span className="text-white text-[20px] font-[700]">{msg.name}</span>
                  <span className="text-[#F5F5F5] font-[700]">{msg.checkIn}</span>
                  <span className="text-[#F5F5F5] font-[700]">{msg.checkOut}</span>
                  <div className=" py-2 flex flex-row justify-between items-center text-white">
                    <h2 className="md:text-[20px] font-[700]">{msg.duration}</h2>
                    <div className="flex justify-center items-center gap-2">
                      <Image src={resultImage} width={32} height={32} alt="" />
                    <h1 className="md:text-[20px] font-[400]">{msg.result}</h1>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
            ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>
  )
}

export default Accomodation
