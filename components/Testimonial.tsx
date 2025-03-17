"use client"
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
// import swiper react components
import  { Swiper, SwiperSlide } from 'swiper/react'

// import rewuired components
import  { Pagination } from 'swiper/modules'

// import swipe styles
import 'swiper/css';
import 'swiper/css/pagination';

//testimonial data
const testimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem.',
    name: "Lucy Antonio"
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem.',
    name: "Michael Smith"
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem.',
    name: "Maria Garcia"
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem.',
    name: "Lucy Antonio"
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem.',
    name: "Michael Smith"
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem.',
    name: "Maria Garcia"
  },
]


import {motion} from 'framer-motion';
import { fadeIn } from "@/lib/variants";

const Testimonial = () => {
  return (
  <section className="py-12 xl:py-28" id="testimonial">
    <div className="container mx-auto">
      <motion.h2
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2}}
      className="h2 text-center">
        Our testimonial
      </motion.h2>
      <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
      >
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination]}
        pagination= {{
          clickable: true
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        }}
        className="h-[320px]">
          {testimonialData.map ((person, index) => {
            return (
            <SwiperSlide className="h-full" key= {index}>
              <div className=" h-full flex flex-col justify-center items-center gap-6 text-center">
                <Image src={person.img} width={90} height={90} alt= ''
                className="rounded-full border-2 border-accent" 
                />
                <div className="flex flex-col justify-center items-center">
                  <FaQuoteLeft className="text-2xl text-gray-300" />
                  <p className="max-w-[380px] mb-4">{person.message}</p>
                  <span className="text-2xl text-accent">{person.name}</span>
                </div>
              </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </motion.div>
    </div>
    </section>
  )
};

export default Testimonial;