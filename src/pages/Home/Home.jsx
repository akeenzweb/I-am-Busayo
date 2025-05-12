import React, { useState } from "react";

import './Home.css'

import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import ScrollFadeIn from '../../components/ScrollFadeIn';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Bg from '../../assets/images/BG2.svg'
import Bg2 from '../../assets/images/BG-Sec2.svg'
import Bg3 from '../../assets/images/BG-Sec3iii.svg'
import Bg4 from '../../assets/images/BG-Sec4.svg'

import Image1 from '../../assets/images/image-1i.jpg'
import Image2 from '../../assets/images/image-1ii.jpg'
import Image3 from '../../assets/images/image-1iii.jpg'
import Image4 from '../../assets/images/image-1iv.jpg'

import ImageGreen from '../../assets/images/image-green.jpg'
import ImageHat from '../../assets/images/image-hat.jpg'

import Client1 from '../../assets/images/cl1.jpeg'
import Client2 from '../../assets/images/cl2.jpeg'
import Client3 from '../../assets/images/cl3.jpeg'
import Client4 from '../../assets/images/cl4.png'
import Client5 from '../../assets/images/cl5.jpeg'
import Client6 from '../../assets/images/cl6.jpg'
import Client7 from '../../assets/images/cl7.png'

import Opened from '../../assets/icons/opened.svg'
import Closed from '../../assets/icons/closed.svg'

export default function Home() {

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "Busayo Salako is a business consultant and change catalyst whose work is expressed through three main avenues:\n\n* Avare Limited – her business consultancy firm\n* Her blog on Medium – where she shares thought-provoking insights\n* Thinking Out Loud (TOL) with Busayo – a storytelling platform amplifying diverse voices.\n\nBusayo is also a speaker, author, and strategic consultant, offering a blend of practical expertise and inspirational leadership.",
    },    
    {
      question: "How can I work with you?",
      answer: "* For business consulting and advisory services, please email avarelimited@gmail.com. \n * For personal 1-on-1 sessions, reach out via thinkingoutloudbusayo.tol@gmail.com.",
    },
    {
      question: "When will your books be available?",
      answer: "You can purchase Busayo’s books on: \n* Amazon – [insert link] \n* Selar – https://selar.com/c34343",
    },
    {
      question: "Where can I follow your work?",
      answer: "Stay connected and follow Busayo’s journey here: \n* Instagram: @iambusayosalako | @tolwithiambusayo | @avarelimited \n* YouTube: iambusayosalako",
    },
  ];


  const [activeIndex, setActiveIndex] = useState(0); // First FAQ open by default
  const [isOpen, setIsOpen] = useState(0)

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setIsOpen(index === activeIndex ? null : index)
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed:2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const settings2 = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };


  return (
    <div className='mont-font'>
      <div className="h-full bg-cover bg-left md:bg-top bg-fixed mt-[111px] " style={{ backgroundImage: `url(${Bg})` }}>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-0">
          <div className="order-2 md:order-1 col-span-4 pb-10  pt-20 px-4 md:pl-44 md:pt-20 letter-track" >
            <h1 className='text-transparent text-4xl font-bold stroke-text'>Welcome!</h1>
            <h1 className='mt-10 md:mt-40 text-4xl md:text-8xl text-white font-semibold '>IAM</h1>
            <h1 className='text-2xl md:text-5xl font-semibold  mont-font text-[#F8E8B1] md:mt-4 letter-track'>BUSAYO SALAKO (IB)</h1>
            <h1 className='text-lg md:text-3xl text-white font-medium mt-10'>Turning Ideas Into Structured Realities—One Detail At A Time</h1>
            <h1 className='text-xs md:text-2xl opacity-50 text-white font-light mt-10 md:mt-32'>(IB - derived from "Iam" + "Busayo”)</h1>
          </div>
          <div className="order-1 md:order-2 col-span-3 flex justify-center items-center">
              <Slider {...settings2} className='md:pl-8 slider items-center w-full h-auto overflow-visible overflow-x-clip'>
                <img src={Image1} alt="" />
                <img src={ImageGreen} alt="" />
                <img src={ImageHat} alt="" />
              </Slider>
            {/* <img src={Image1} alt="" /> */}
          </div>
        </div>
      </div>


      {/* Section 2 */}
      
      <div className="h-full bg-cover bg-right md:bg-top bg-fixed " style={{ backgroundImage: `url(${Bg2})` }}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20 p-4 md:p-44'>
            <ScrollFadeIn y={80}>
              <div className=" flex justify-center items-center">
                <img src={Image2} alt="" />
              </div>
            </ScrollFadeIn>

            <div className='text-white mont-font'>
              <ScrollFadeIn y={80}>
                <h1 className='font-semibold mb-8 text-3xl letter-track uppercase'>What to know about <span className='font-bold  text-[#F8E8B1] '>IB</span></h1>
                <p className='text-lg leading-loose tracking-wider text-[#E8E8E8] '>A strategist at heart and a curator of clarity, I am a passionate individual with a deep love for introspection and reflection. With a passion for dissecting ideas and rebuilding them into structured realities, I specialize in <span className='font-bold  text-white '>Project Management</span>, <span className='font-bold  text-white '>Event Coordination</span>, and <span className='font-bold  text-white '>Administrative Precision</span>. Whether it’s streamlining workflows, designing memorable events, or sharing thought-provoking musings, I believe in turning chaos into harmony—one detail at a time. Let’s collaborate to create systems that inspire and endure.</p>
                <Link to="/about"><button className="bg-[#F8E8B1] tracking-widest hover:bg-[#e7d394] mt-8 mb-10 text-[#14332D] text-lg font-semibold py-3 px-6">
                  Learn More
                </button></Link>
              </ScrollFadeIn>
            </div>
          </div>
      </div>


      {/* Section 3 */}
      <div className="h-full bg-cover bg-center md:bg-top  " style={{ backgroundImage: `url(${Bg3})` }}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 p-4 md:p-44 items-center'>
          <ScrollFadeIn y={80}>
            <div className='text-white mont-font mt-20 md:mt-0'>
              <h1 className='font-semibold mb-8 text-3xl letter-track uppercase'>Mission Statement</h1>
              <p className='text-lg leading-loose tracking-wider text-[#E8E8E8] '>To transform ideas into structured realities through strategic planning, organizational clarity, and thought leadership. By blending introspection with action, I aim to inspire, streamline, and create lasting impact in project management, event coordination, and beyond!</p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn y={80}>
            <div className=" flex justify-center items-center">
              <img src={Image3} alt="" />
            </div>
          </ScrollFadeIn>
        </div>
      </div>


      {/* Section 4 */}
      <div className="h-full bg-cover bg-right md:bg-top bg-fixed border-t" style={{ backgroundImage: `url(${Bg4})` }}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 p-4 md:p-44 items-start'>
          <div className=" flex justify-center items-center">
            <ScrollFadeIn y={80}>
              <img src={Image4} alt="" />
            </ScrollFadeIn>
          </div>

          <div className='text-black mont-font'>
            <ScrollFadeIn y={80}>
            <h1 className='font-semibold mb-8 text-3xl letter-track uppercase'>Frequently asked questions</h1>
            <div className="max-w-xl mx-auto mt-10 space-y-4 bg-white">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between px-4 py-10 font-medium text-[#297A53] hover:bg-[#F2F7F5] transition-all"
                  >
                    {faq.question}
                    {activeIndex === index && (
                        <img src={Opened} alt="open" />
                    )}
                    
                    {activeIndex !== index && (
                        <img src={Closed} alt="close" />
                    )}
                  </button>
                  <AnimatePresence >
                    {activeIndex === index && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 py-5 text-gray-700 bg-white border-t"
                      >
                        <p className="whitespace-pre-line">
                          {faq.answer}
                        </p>
                        </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>



      {/* Section 5 */}
      <div className="p-4 border-t ">
        <ScrollFadeIn y={80}>
          <h1 className='font-semibold mb-8 text-center text-3xl letter-track uppercase mt-10 md:mt-20'>Clients I've Worked With</h1>
        </ScrollFadeIn>
        <Slider {...settings} className='md:pl-8 slider items-center w-full h-auto overflow-visible overflow-x-clip'>
          <div className="w-[400px] h-[200px] md:h-[400px] items-center bg-white   overflow-hidden mr-20 md:mr-0">
            <img src={Client1} alt="Profile" className="w-full h-full object-contain" />
          </div>

          <div className="w-full h-[200px] md:h-[400px] items-center bg-white   overflow-hidden mr-20 md:mr-0">
            <img src={Client2} alt="Profile" className="w-full h-full object-contain " />
          </div>

          <div className="w-full h-[200px] md:h-[400px] items-center bg-white   overflow-hidden mr-20 md:mr-0">
            <img src={Client3} alt="Profile" className="w-full h-full object-contain " />
          </div>

          <div className="w-full h-[200px] md:h-[400px] items-center bg-white   overflow-hidden mr-20 md:mr-0">
            <img src={Client4} alt="Profile" className="w-full h-full object-contain " />
          </div>

          <div className="w-full h-[200px] md:h-[400px] items-center bg-white   overflow-hidden mr-20 md:mr-0">
            <img src={Client5} alt="Profile" className="w-full h-full object-contain " />
          </div>

          <div className="w-full h-[200px] md:h-[400px] items-center bg-white   overflow-hidden mr-20 md:mr-0">
            <img src={Client6} alt="Profile" className="w-full h-full object-contain " />
          </div>

          <div className="w-full h-[200px] md:h-[400px] items-center bg-white   overflow-hidden mr-20 md:mr-0">
            <img src={Client7} alt="Profile" className="w-full h-full object-contain " />
          </div>
        </Slider>
      </div>


    </div>
  )
}
