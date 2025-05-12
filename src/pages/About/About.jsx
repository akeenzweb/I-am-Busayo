import React from 'react'

import { Link} from 'react-router-dom';

import ScrollFadeIn from '../../components/ScrollFadeIn';

import Bg from '../../assets/images/bkgd-1.png'
import Mobile1 from '../../assets/images/bkgd-mobile-1.png'
import Bg2 from '../../assets/images/BG-2Sec2.svg'
import Bg3 from '../../assets/images/BG-2Sec3i.svg'
import Bg4 from '../../assets/images/BG-2Sec3ii.svg'

import Image1 from '../../assets/images/image-2i.jpg'
import Image2 from '../../assets/images/image-2ii.jpg'
import Image3 from '../../assets/images/image-2iii.jpg'

import TolLogo from '../../assets/images/Tol.png'
import TolBg from '../../assets/images/TolBg.png'

import dot from '../../assets/icons/dot.svg'

export default function About() {
  return (
    <div className='mt-[111px] mont-font text-white'>
      <div className="h-screen hidden md:block bg-cover bg-right md:bg-top  mt-[111px] text-right pt-96 px-4 md:px-44" style={{ backgroundImage: `url(${Bg})` }}>
        <h1 className='font-semibold mb-8 text-3xl letter-track uppercase mt-10'>ABOUT ME</h1>
        <p className='tracking-widest leading-loose'>Hi, I'm <span className='font-bold text-[#F8E8B1]'>IamBusayoSalako </span>(<span className='font-bold'>IB</span>), a reflective thinker who enjoys sharing <br /> insights and excels in project, event, and organizational management.</p>
      </div>

      <div className="h-screen block md:hidden bg-cover bg-right md:bg-top  mt-[111px] text-center pt-96 px-4 md:px-44" style={{ backgroundImage: `url(${Mobile1})` }}>
        <h1 className='font-semibold mb-8 text-3xl letter-track uppercase mt-10'>ABOUT ME</h1>
        <p className='tracking-widest leading-loose'>Hi, I'm <span className='font-bold text-[#F8E8B1]'>IamBusayoSalako </span>(<span className='font-bold'>IB</span>), a reflective thinker who enjoys sharing <br /> insights and excels in project, event, and organizational management.</p>
      </div>

      <div>
        <div className="h-full text-black">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20 p-4 md:p-44 items-center'>
              <div className=' mont-font mt-20 md:mt-0'>
                <ScrollFadeIn y={80}>
                  <h1 className='font-semibold mb-8 text-3xl letter-track uppercase'>My Journey & Expertise</h1>
                  <p className='text-lg leading-loose tracking-wider text-[#777777] '>My path has been shaped by an insatiable curiosity for structure, strategy, and efficiency. With a Master’s degree in Human Resource Management from Leeds Beckett University and CIPD certification, I have built a foundation in understanding human dynamics, organizational behavior, and strategic leadership.</p>
                </ScrollFadeIn>
              </div>

              <div className=" flex justify-center items-center">
                <ScrollFadeIn y={80} delay={0.1}>
                  <img src={Image1} alt="" />
                </ScrollFadeIn>
              </div>
          </div>

          <div className='p-4 md:p-44 md:mt-[-220px]'>
            <ScrollFadeIn y={80}>
              <h1 className='font-semibold mb-8 text-2xl letter-track '>Over the years, I have cultivated a passion for:</h1>
              <div>
                <div className='block md:flex mb-6 mt-8'><div className='flex items-center w-[330px]'><img src={dot} alt="" className='mr-4 w-4 h-4' /><h1 className='text-[#297A53] tracking-widest font-bold text-lg'>Project Management</h1></div><p className='text-[#777777] ml-6 text-lg tracking-wider'>– Transforming abstract ideas into actionable, results-driven plans.</p></div>
                <div className='block md:flex mb-6'><div className='flex items-center w-[330px]'><img src={dot} alt="" className='mr-4 w-4 h-4' /><h1 className='text-[#297A53] tracking-widest font-bold text-lg'>Event Coordination</h1></div><p className='text-[#777777] ml-6 text-lg tracking-wider'>– Crafting seamless, well-executed events that leave a lasting impact.</p></div>
                <div className='block md:flex mb-6'><div className='flex items-center w-[330px]'><img src={dot} alt="" className='mr-4 w-4 h-4' /><h1 className='text-[#297A53] tracking-widest font-bold text-lg'>Organizational Strategy</h1></div><p className='text-[#777777] ml-6 text-lg tracking-wider'>– Creating systems that enhance productivity and efficiency.</p></div>
                <div className='block md:flex mb-6 items-start'><div className='flex items-center w-[330px]'><img src={dot} alt="" className='mr-4 w-4 h-4' /><h1 className='text-[#297A53] tracking-widest font-bold text-lg'>Thought Leadership</h1></div><p className='text-[#777777] ml-6 text-lg tracking-wider'>– Exploring ideas, reflecting on strategies, and sharing insights that inspire transformation.</p></div>
              </div>
            </ScrollFadeIn>
          </div>

          {/* Section */}
          <ScrollFadeIn y={80}>
            <div className="h-full bg-cover bg-center md:bg-top p-4 md:p-44 " style={{ backgroundImage: `url(${Bg2})` }}>
              <div className='bg-white px-10 py-20 my-10 md:my-0 shadow-[4px_4px_14.7px_24px_rgba(155,183,165,0.14)]'>
                <h1 className='font-semibold mb-8 text-2xl md:text-3xl letter-track uppercase'>A Passion for Reflection & Impact</h1>
                <p className='text-lg leading-loose tracking-wider text-[#777777] '>Beyond my professional expertise, I am deeply invested in the power of introspection. I believe that great ideas are born from moments of stillness, refined through reflection, and actualized through strategic execution. My writing, work, and collaborations are guided by this belief—an approach that has allowed me to build meaningful projects, craft memorable experiences, and help organizations and individuals bring clarity to their vision.</p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Section */}
        <ScrollFadeIn y={80}>
          <div className="flex flex-col items-center justify-center p-4 md:p-44 text-center" style={{ backgroundImage: `url(${TolBg})` }}>
            <img src={TolLogo} alt="" className="mb-8" />
            <p className="text-lg leading-loose tracking-wider text-[#222222] mb-20 md:mb-0">
              Thinking Out Loud (TOL) with Busayo, is a dynamic platform that fosters thought-provoking conversations, amplifies voices through transformative storytelling, and builds a community rooted in authenticity, growth, vulnerability, and inspiration.
            </p>
          </div>
        </ScrollFadeIn>
        

        {/* Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className='h-full md:h-full order-2 md:order-1 p-4 md:pl-44 py-2 pb-16 md:pb-0 md:py-20 flex items-center justify-center' style={{ backgroundImage: `url(${Bg3})` }}>
            <ScrollFadeIn y={80}>
              <div className='text-white mont-font mt-20 md:mt-0'>
                <h1 className='font-semibold mb-8 text-2xl md:text-3xl letter-track uppercase'>Author & Thought Leader</h1>
                <p className='text-lg leading-loose tracking-wider text-[#E8E8E8] '>As an author, I channel my passion for strategy, leadership, and structured organization into words. My upcoming books will explore essential themes around project execution, leadership, and creating systems that endure. <br /><br />This platform is my digital space—a hub for insightful conversations, strategic projects, and the art of meaningful organization. <br /><br />Whether you’re here to gain insights, collaborate, or transform an idea into reality, welcome to a journey of clarity and execution.</p>
              </div>
            </ScrollFadeIn>
          </div>
          <div className='order-1 md:order-2 '>
            <img src={Image2} alt="" className='w-full h-full object-cover'/>
          </div>
        </div>

        {/* Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className=''>
            <img src={Image3} alt="" className='w-full h-full object-cover'/>
          </div>
          <div className='h-full md:h-full p-4 md:pr-44 md:pl-20 py-20 flex items-center justify-center' style={{ backgroundImage: `url(${Bg4})` }}>
            <ScrollFadeIn y={80}>
              <div className='text-black mont-font mt-10 md:mt-0'>
                <h1 className='font-semibold mb-8 text-2xl md:text-3xl letter-track uppercase'>Let’s Connect & Build Something Great!</h1>
                <p className='text-lg leading-loose tracking-wider text-[#777777] '>I’m always open to collaborating with like-minded individuals and organizations. If you’re looking to create something impactful, streamline operations, or bring structure to a project, let’s make it happen.</p>
                <Link to="/contact-me"><button className="bg-[#F8E8B1] tracking-widest hover:bg-[#e7d394] mt-8 mb-10 text-[#14332D] text-lg font-semibold py-3 px-6">
                  Get In Touch
                </button></Link>
              </div>
            </ScrollFadeIn>
          </div>
        </div>




      </div>


    </div>    
  )
}


