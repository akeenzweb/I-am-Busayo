import React, { useEffect, useRef } from "react";

import ScrollFadeIn from '../../components/ScrollFadeIn';


import Banner from '../../assets/images/collage-banner2.webp'
import Bg from '../../assets/images/BG.svg'
import Collage1 from '../../assets/images/collage-1.png'
import Collage2 from '../../assets/images/collage-2.png'
import Collage3 from '../../assets/images/collage-3.png'
import Collage4 from '../../assets/images/collage-4.png'
import Collage5 from '../../assets/images/collage-5.png'
import Tape from '../../assets/images/tape.png'

import BannerMobile from '../../assets/images/collage-banner-mobile-1.jpg'
import CollageM1 from '../../assets/images/collageM-1.png'
import CollageM2 from '../../assets/images/collageM-2.png'
import CollageM3 from '../../assets/images/collageM-3.png'
import CollageM4 from '../../assets/images/collageM-4.png'
import CollageM5 from '../../assets/images/collageM-5.png'

const ScrollRevealPath = () => {
  const pathRef = useRef(null);
  const pathRef2 = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transition = "stroke-dashoffset 0.2s ease-out";

    const handleScroll = () => {
      const pathRect = path.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the path has scrolled into view
      const visible =
        1 - (pathRect.top + pathRect.height) / (windowHeight + pathRect.height);

      // Clamp between 0 and 1
      const progress = Math.min(Math.max(visible, 0), 1);

      path.style.strokeDashoffset = length * (1 - progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount in case already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const path2 = pathRef2.current;
    const length2 = path2.getTotalLength();

    path2.style.strokeDasharray = length2;
    path2.style.strokeDashoffset = length2;
    path2.style.transition = "stroke-dashoffset 0.2s ease-out";

    const handleScroll = () => {
      const pathRect2 = path2.getBoundingClientRect();
      const windowHeight2 = window.innerHeight;

      // Calculate how far the path has scrolled into view
      const visible2 =
        1 - (pathRect2.top + pathRect2.height) / (windowHeight2 + pathRect2.height);

      // Clamp between 0 and 1
      const progress2 = Math.min(Math.max(visible2, 0), 1);

      path2.style.strokeDashoffset = length2 * (1 - progress2);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount in case already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <div className="pb-48" style={{ height: "100%", backgroundImage: `url(${Bg})` }}>

      {/* For larger screens */}
      <div className="hidden md:block">
        <div className="w-full overflow-x-hidden">
          <img className="w-full object-cover" src={Banner} alt="" />
        </div>
        <div className="main-section relative">

          {/* <svg 
            className="absolute top-0 left-1/2 transform -translate-x-[60.5%] "
            width="1062" height="4345" viewBox="0 0 1062 4345" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef} d="M682.5 21V239H905.5V350.5H249V495.5H1V1144H603.5V1036H831.5V1321.5H1060.5V1934.5H148.5V2674H616.5V3524H1030.5V4068.5H674.5V4345" stroke="white" stroke-width="2"/>
            <circle cx="683.5" cy="20.5" r="20.5" fill="white"/>
          </svg> */}

          <svg 
            className="absolute top-0 left-1/2 transform -translate-x-[60.5%] "
            width="1062" height="4345" viewBox="0 0 1062 4345" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef} d="M682.5 21V239H905.5V350.5H249V495.5H1V1144H603.5H712H831.5V1321.5H1060.5V1934.5H148.5V2674H616.5V3524H1030.5V4068.5H674.5V4345" stroke="white" stroke-width="2"/>
            <circle cx="683.5" cy="20.5" r="20.5" fill="white"/>
          </svg>



          <div className="flex justify-between pt-[640px] ">
            <ScrollFadeIn y={80} delay={0.5}>
              <img src={Collage1} alt="" className=""/>
            </ScrollFadeIn>

            <ScrollFadeIn y={10} >
              <img src={Collage2} alt="" className=" mt-[-150px]"/>
            </ScrollFadeIn>
          </div>

          <div className="flex justify-center">
            <img src={Tape} alt="" />
          </div>

          <div className="pl-10 mt-64">
            <ScrollFadeIn y={10} >
              <img src={Collage3} alt="" />
            </ScrollFadeIn>
          </div>

          <div className="flex justify-center mt-64">
            <img src={Collage4} alt="" />
          </div>

          <div className="flex justify-center mt-10">
            <img src={Collage5} alt="" />
          </div>

        </div>
      </div>

      {/* For Smaller screens */}
      <div className="block md:hidden ">
        <div className="w-full overflow-x-hidden mt-20">
          <img className="w-full object-cover" src={BannerMobile} alt="" />
        </div>
        <div className="main-section-mobile relative">
          <svg className="absolute top-0 left-1/2 transform -translate-x-[60.5%] " width="334" height="2303" viewBox="0 0 334 2303" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef2} d="M169.5 30V67.5H264.5V97H1V298.5H300V762.5H30V1474.5H159V1806H332.5V2160H159V2302.5" stroke="white" stroke-width="2"/>
            <circle cx="167.5" cy="14.5" r="14.5" fill="white"/>
          </svg>

          <div className="flex justify-start pt-32 pl-8">
            <img src={CollageM1} alt="" className=""/>
          </div>

          <div className="flex justify-end pt-32 pl-8">
            <img src={CollageM2} alt="" className=""/>
          </div>

          <div className="flex justify-center pt-32">
            <img src={Tape} alt="" />
          </div>

          <div className="flex justify-end pt-32 pl-8">
            <img src={CollageM3} alt="" className=""/>
          </div>

          <div className="flex justify-center pt-32 ">
            <img src={CollageM4} alt="" className=""/>
          </div>

          <div className="flex justify-center pt-32 ">
            <img src={CollageM5} alt="" className=""/>
          </div>





        </div>
      </div>
    </div>
  );
};

export default ScrollRevealPath;
