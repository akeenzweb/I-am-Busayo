import React from 'react'

import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/Logo.svg'

import Linkedin from '../../../assets/icons/linkedin.svg'
import Instagram from '../../../assets/icons/IG.svg'
import X from '../../../assets/icons/X.svg'
import Facebook from '../../../assets/icons/FB.svg'
//import Tiktok from '../../../assets/icons/tiktok.svg'
import Youtube from '../../../assets/icons/youtube.svg'

import FTbG from '../../../assets/images/Footer-bg2.png'

export default function Footer() {
  return (
    <div className='  mont-font pt-10 pb-5' style={{ backgroundImage: `url(${FTbG})` }}>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-20 md:gap-60 mx-4 md:mx-44 my-20 '>
            <div className='col-span-2'>
                <img className='' src={Logo} alt="logo" />
                <div className='flex mt-10 md:mt-52 w-full'>
                    <a href='https://www.linkedin.com/in/iambusayo-salako'><div className='mr-[20px] md:mr-[40px] cursor-pointer'><img className='mr-[20px] md:mr-[40px] cursor-pointer' src={Linkedin} alt="" /></div></a>
                    <a href='https://www.instagram.com/iambusayosalako?igsh=bWdjbTczd3k5aWlz'><div className='mr-[20px] md:mr-[40px] cursor-pointer'><img className='mr-[20px] md:mr-[40px] cursor-pointer' src={Instagram} alt="" /></div></a>
                    <a href='https://x.com/iambusayosalako?t=iElRrJETdzzm5HY3IIgxJw&s=09'><div className='mr-[20px] md:mr-[40px] cursor-pointer'><img className='mr-[20px] md:mr-[40px] cursor-pointer' src={X} alt="" /></div></a>
                    <a href='https://www.facebook.com/share/15Vwra6FQ7/'><div className='mr-[20px] md:mr-[40px] cursor-pointer'><img className='mr-[20px] md:mr-[40px] cursor-pointer' src={Facebook} alt="" /></div></a>
                    <a href='https://www.youtube.com/channel/UCsPHgVyl-NgtLRvVEtLuNQQ'><div className='mr-[20px] md:mr-[40px] cursor-pointer'><img className='mr-[20px] md:mr-[40px] cursor-pointer' src={Youtube} alt="" /></div></a>
                </div>
            </div>
            <div className='col-span-4 '>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <h1 className='font-semibold text-2xl mb-8'>Quick Links</h1>
                        <Link to="/"><p className='cursor-pointer font-normal text-[#1b1b1b] text-lg md:text-xl mb-2'>Home</p></Link>
                        <Link to="/about"><p className='cursor-pointer font-normal text-[#1b1b1b] text-lg md:text-xl mb-2'>About Me</p></Link>
                        <Link to="/contact-me"><p className='cursor-pointer font-normal text-[#1b1b1b] text-lg md:text-xl mb-2'>Contact Me</p></Link>
                        <Link to="/impacts"><p className='cursor-pointer font-normal text-[#1b1b1b] text-lg md:text-xl mb-2'>Impacts</p></Link>
                        <Link to="/collage"><p className='cursor-pointer font-normal text-[#1b1b1b] text-lg md:text-xl mb-2'>Collage</p></Link>
                    </div>

                    <div className=''>
                        <h1 className='font-semibold text-2xl mb-8 mt-24 md:mt-0'>Newsletter</h1>
                        <p className='w-80 font-normal text-[#1b1b1b] text-lg md:text-xl mb-2'>Stay updated with insights and book launches. Subscribe to my newsletter!</p>
                        {/* <div className="flex flex-col items-start md:items-end mt-10 gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-auto md:w-full border border-gray-300 px-4 py-3 text-lg placeholder-black"
                            />
                            <button className="border  border-black px-6 py-3 text-green-700 font-semibold text-lg hover:bg-green-50 transition">
                                Subscribe
                            </button>
                        </div> */}



                        <div className="">
                            <form
                                action="https://gmail.us7.list-manage.com/subscribe/post?u=85aae28bd06182a2af57e1319&amp;id=4b638d8b92&amp;f_id=006a93e4f0"
                                method="post"
                                target="_blank"
                                rel="noopener noreferrer"
                                // className="space-y-4"
                            >
                                {/* <h2 className="text-2xl font-bold">Subscribe</h2>
                                <p className="text-sm text-gray-500">
                                <span className="text-red-500">*</span> indicates required
                                </p> */}

                                <div className="flex flex-col">
                                {/* <label htmlFor="mce-EMAIL">
                                    Email Address <span className="text-red-500">*</span>
                                </label> */}
                                <input
                                    type="email"
                                    name="EMAIL"
                                    id="mce-EMAIL"
                                    required
                                    // className="border px-3 py-2 rounded mt-1 mb-5"
                                    placeholder="Enter your email address"
                                    className="w-auto md:w-full border border-gray-300 px-4 py-3 text-lg placeholder-black mb-5"
                                />
                                </div>

                                {/* Hidden field to prevent bot signups */}
                                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                <input type="text" name="b_85aae28bd06182a2af57e1319_4b638d8b92" tabIndex="-1" />
                                </div>

                                <button
                                type="submit"
                                className="border  border-black px-6 py-3 text-green-700 font-semibold text-lg hover:bg-green-50 transition"
                                >
                                Subscribe
                                </button>
                            </form>
                        </div>



                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-center mb-8 font-bold text-[#297A53] text-sm md:text-lg mt-8 mont-font text-center'>© 2025 IAM Busayo Salako. All Rights Reserved.</div>
    </div>
  )
}
