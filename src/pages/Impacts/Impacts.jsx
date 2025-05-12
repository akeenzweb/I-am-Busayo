import React from 'react'

import ScrollFadeIn from '../../components/ScrollFadeIn';

import Bg1 from '../../assets/images/bkgd-2.png'

import Book from '../../assets/images/book2.png'
import Event1 from '../../assets/images/Event-1.jpg'
import Event2 from '../../assets/images/Event-2.jpg'

import StarYellow from '../../assets/icons/star-yellow.svg'
//import StarGreen from '../../assets/icons/star-green.svg'
import StarOrange from '../../assets/icons/star-orange.svg'
import StarPurple from '../../assets/icons/star-purple.svg'

export default function Impacts() {
  return (
    <div className='mt-[111px]'>
      <div className="h-full bg-cover bg-center md:bg-top  " style={{ backgroundImage: `url(${Bg1})` }}>

        {/* Section 1 */}
        <div className='grid grid-cols-1 md:grid-cols-2   items-center'>
          <div className='text-white mont-font  p-4 md:pl-44 md:pr-8 md:py-20 order-2 md:order-1 '>
            <div className='flex items-center'>
              <img src={StarYellow} alt="" className='w-10 h-10 md:w-20 md:h-20' />
              <h1 className='ml-4 md:ml-8 font-semibold text-lg md:text-3xl letter-track uppercase'>New Book Release</h1>
            </div>
            <p className='text-lg leading-loose tracking-wider text-[#E8E8E8] mt-8'>"IMYA: Journey to Acceptance" by Busayo Salako explores the deep meaning and power of names. Through personal stories, scriptures, and history, the book reveals how names shape identity, silence self-doubt, and guide us to our true selves. It invites readers to uncover the spiritual and cultural roots of their names and overcome imposter syndrome to reclaim their identity.</p>
            <a href='https://selar.com/c34343'><button className="bg-[#F8E8B1] tracking-widest hover:bg-[#e7d394] mt-8 mb-10 text-[#14332D] text-lg font-semibold py-3 px-6">
              Learn More
            </button></a>
          </div>

          <div className='p-4 md:p-44 bg-[#DCF6DA] border h-full order-1 md:order-2 '>
            <img src={Book} alt="" />
          </div>
        </div>


        {/* Section 2 */}
        <div className='grid grid-cols-1 md:grid-cols-2   items-center'>
          <div className='p-4 md:p-44 bg-[#FFDBBB] border h-full '>
            <ScrollFadeIn y={80}>
              <img src={Event1} alt="" />
            </ScrollFadeIn>
          </div>

          <div className='text-black bg-white h-full mont-font  p-4 md:pr-44 md:pl-20 md:py-20 '>
            <div className='flex items-center'>
              <img src={StarOrange} alt="" className='w-10 h-10 md:w-20 md:h-20' />
              <h1 className='ml-4 md:ml-8 font-semibold text-lg md:text-3xl letter-track uppercase'>Evolve Webinar</h1>
            </div>
            <iframe className='mt-10' width="100%" height="315" src="https://www.youtube.com/embed/TcrkgOHwqIM?si=V1gx-xPb6WscUlEL&amp;start=267" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className='text-lg leading-loose tracking-wider text-[#222222] mt-8 mb-20 md:mb-0'>EVOLVE: Why, How, When?
            Held April 2025, the second edition of TOL invited guests to reflect deeply on their personal transformation journeys. Featuring heartfelt contributions from Molawa Quadri, Tolulope Eliseus, and Gbemisola Bode-Ajayi, this edition unpacked the “Why, How, and When” of evolving—from the discomfort of change to the beauty of growth.</p>
          </div>
        </div>


        {/* Section 3 */}
        <div className='grid grid-cols-1 md:grid-cols-2   items-center'>
          <div className='text-black bg-white h-full mont-font  p-4 md:pr-44 md:pl-20 md:py-20 order-2 md:order-1 '>
            <div className='flex items-center'>
              <img src={StarPurple} alt="" className='w-10 h-10 md:w-20 md:h-20' />
              <h1 className='ml-4 md:ml-8 font-semibold text-lg md:text-3xl letter-track uppercase'>Growing Without Limits</h1>
            </div>
            <iframe className='mt-10' width="100%" height="315" src="https://www.youtube.com/embed/b3D3BiI-ReE?si=tbczltP3IcTaq35x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className='text-lg leading-loose tracking-wider text-[#222222] mt-8 mb-20 md:mb-0'>"Growing Without Limits: Thriving at Every Season" was TOL's maiden edition which held March 2025 in honor of International Women’s Day. With powerful insights from Victoria Ajayi and Jumoke Olusoji. The session explored the beauty of embracing each season of life—singleness, marriage, motherhood, and career—with grace, boldness, and intentionality. It was a refreshing reminder that thriving isn’t tied to a title or timeline, but a mindset rooted in self-awareness and purpose.</p>
          </div>

          <div className='p-4 md:p-44 bg-[#F9E6FA] border h-full order-1 md:order-2 '>
            <ScrollFadeIn y={80}>
              <img src={Event2} alt="" />
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
