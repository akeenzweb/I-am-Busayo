import React from 'react'

import Bg from '../../assets/images/bg-blur.svg'

import Email from '../../assets/icons/email-box.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Instagram from '../../assets/icons/IG.svg'
import Twitter from '../../assets/icons/X.svg'
import Facebook from '../../assets/icons/FB.svg'
import Youtube from '../../assets/icons/youtube.svg'
//import Tiktok from '../../assets/icons/tiktok.svg'

export default function Contact() {
  return (
    <div className='mt-[111px] mont-font '>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-4 md:px-44 mt-40">
            <div className='mb-20'>
                <h1 className='font-extrabold mb-8 text-2xl md:text-3xl letter-track uppercase'>Let’s Get In Touch</h1>
                <p className='text-lg leading-loose tracking-wider text-[#777777] '>Let’s collaborate and bring ideas to life! Fill out the form below, and We’ll get back to you soon.
                    <br /> Or just reach out manually by:
                </p>

                <div className='block  mt-10'>
                    <div className='mr-10 mt-10'>
                        <img src={Email} alt="" />
                        <h1 className='mt-5 font-semibold text-gray-500'>Email Avery for Consultancy</h1>
                        <a href="mailto:avarelimited@gmail.com"><p className='text-[#297A53] text-lg font-bold mt-2'>avarelimited@gmail.com</p></a>
                    </div>

                    <div className='mr-10 mt-10'>
                        <img src={Email} alt="" />
                        <h1 className='mt-5 font-semibold text-gray-500'>Email Thinking Out Loud</h1>
                        <a href="mailto:thinkingoutloudbusayo.tol@gmail.com"><p className='text-[#297A53] text-lg font-bold mt-2'>thinkingoutloudbusayo.tol@gmail.com</p></a>
                    </div>
                </div>

                <hr className='mt-10 md:mt-10' />

                <ul className='mt-10 md:mt-10'>
                    <li className='flex items-end mb-4 cursor-pointer'><a className='flex' href='https://www.linkedin.com/in/iambusayo-salako'><img src={Linkedin} alt="" /><p className='text-[#297A53] ml-4 font-bold text-lg'>Busayo Salako</p></a></li>
                    <li className='flex items-end mb-4 cursor-pointer'><a className='flex' href='https://www.instagram.com/iambusayosalako?igsh=bWdjbTczd3k5aWlz'><img src={Instagram} alt="" /><p className='text-[#297A53] ml-4 font-bold text-lg'>@iambusayosalako</p></a></li>
                    <li className='flex items-end mb-4 cursor-pointer'><a className='flex' href='https://x.com/iambusayosalako?t=iElRrJETdzzm5HY3IIgxJw&s=09'><img src={Twitter} alt="" /><p className='text-[#297A53] ml-4 font-bold text-lg'>@iambusayosalako</p></a></li>
                    <li className='flex items-end mb-4 cursor-pointer'><a className='flex' href='https://www.facebook.com/share/15Vwra6FQ7/'><img src={Facebook} alt="" /><p className='text-[#297A53] ml-4 font-bold text-lg'>IamBusayo Salako</p></a></li>
                    <li className='flex items-end mb-4 cursor-pointer'><a className='flex' href='https://www.youtube.com/channel/UCsPHgVyl-NgtLRvVEtLuNQQ'><img src={Youtube} alt="" /><p className='text-[#297A53] ml-4 font-bold text-lg'>@iambusayosalako</p></a></li>
                </ul>
            </div>
            <div className="h-full bg-cover bg-right md:bg-top bg-fixed bg-gray-100 p-4 md:p-20">
                <h1 className='text-lg font-semibold mt-10 md:mt-0 mb-10'>Fill in the details below and our team will get back to you shortly</h1>
                <form class="max-w-md mx-auto p-4 space-y-4" action="https://formspree.io/f/mwpobaqb" method="POST">
                    {/*Full Name*/}
                    <div>
                        <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                        type="text"
                        id="fullName"
                        class="w-full border border-gray-400 p-2 rounded-none"
                        placeholder="Enter your full name"
                        name='name'
                        required
                        />
                    </div>

                    {/* <!-- Email --> */}
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                        type="email"
                        id="email"
                        class="w-full border border-gray-400 p-2 rounded-none"
                        placeholder="Enter your email"
                        name='email'
                        required
                        />
                    </div>

                    {/* <!-- Phone Number --> */}
                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                        type="tel"
                        id="phone"
                        class="w-full border border-gray-400 p-2 rounded-none"
                        placeholder="Enter your phone number"
                        name='phone-number'
                        required
                        />
                    </div>

                    {/* <!-- Message --> */}
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                        id="message"
                        rows="4"
                        class="w-full border border-gray-400 p-2 rounded-none"
                        placeholder="Write your message"
                        name='message'
                        required
                        ></textarea>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <button type="submit" class="bg-[#F8E8B1] tracking-widest hover:bg-[#e7d394] mt-8 mb-10 text-[#14332D] text-lg font-semibold py-3 px-6">Submit</button>
                </form>

            </div>
        </div>
    </div>
  )
}
