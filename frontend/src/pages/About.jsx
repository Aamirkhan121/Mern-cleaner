import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiHomeHeartLine } from "react-icons/ri";
import { MdOutlineCleanHands } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import { GiFlowerPot } from "react-icons/gi";
import Mail from '../components/Mail';

const About = () => {
  return (
      <>
    <section className=" section flex justify-center items-center bg-gray300">
      <div className="text-center p-4 md:p-8 mb-20 max-w-lg">
        <div className="mb-4">
          <p className="text-xl font-semibold text-blue-600">Go-To Cleaners</p>
        </div>

        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl font-normal text-gray-800">ABOUT US</h1>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            We’re passionate about delivering exceptional cleaning that goes beyond expectations.
          </p>
        </div>

        <a href='#about' className="bg-blue-500 border border-black-800 px-4 py-2 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105">
          EXPLORE
        </a>
      </div>
    </section>

<section className="image-sec flex justify-center items-center bg-gray300">
 {/* image */}
 <div className='image w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-6xl'>
<img id='about' className='w-full h-auto object-cover  md:rounded-[6rem] rounded-[3rem]' src="/About-hero.webp" alt="" />
      </div>
</section>

<section className='section bg-gray300'>
  <div className='p-8 w-full'></div>
</section>

{/* our team */}
<section className='our-team-sec bg-gray300'>
<div className='main flex flex-wrap justify-evenly gap-4 px-4 md:px-8 lg:px-16 xl:px-32'>
  <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 gap-4'>
    <div className='text-1xl tracking-custom'>GET TO KNOW</div>
    <h1 className='text-5xl font-normal tracking-spacing'>Our Team</h1>
  </div>
  <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
    <p className='text-gray-600 tracking-custom'>
      Meet the dedicated professionals behind our top-tier cleaning services. Relax on the weekends.
    </p>
    </div>
</div>
{/* image */}
<div className='image w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-6xl mt-8 mx-auto flex justify-center items-center'>
  <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16 xl:px-32'>
    <div className="img-1 w-full">
      <img className='w-full h-auto object-cover  md:rounded-[3rem] rounded-[3rem]' src="/Team-1.webp" alt="" />
      <div className='text-center'>
        <h1 className='text-2xl font-semibold'>Amy Lee</h1>
        <p className='text-gray-600'>Cleaning Specialist</p>
        <p className='text-gray-600'>Amy ensures every space is spotless and clean.</p>
                    <div className="flex gap-4 mt-2 justify-center">
                      <a
                        href="https://www.youtube.com/@mdaamirkhan8381"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaYoutube className='w-4' />
                      </a>
                      <a
                        href="https://www.instagram.com/website_services_byaamir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaInstagram className='w-4'/>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/md-aamir-khan-740406283/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaLinkedin className='w-4'/>
                      </a>
                  </div>
      </div>
    </div>
    
    <div className="img-2 w-full">
      <img className='w-full h-auto object-cover  md:rounded-[3rem] rounded-[3rem]' src="/Team-2.webp" alt="" />
      <div className='text-center'>
        <h1 className='text-2xl font-semibold'>Eva Kim</h1>
        <p className='text-gray-600'>Sanitation Technician</p>
        <p className='text-gray-600'>Eva provides top-notch disinfection services.</p>
                    <div className="flex gap-4 mt-2 justify-center">
                      <a
                        href="https://www.youtube.com/@mdaamirkhan8381"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaYoutube className='w-4' />
                      </a>
                      <a
                        href="https://www.instagram.com/website_services_byaamir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaInstagram className='w-4'/>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/md-aamir-khan-740406283/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaLinkedin className='w-4'/>
                      </a>
                  </div>
      </div>
    </div>

    <div className="img-3 w-full">
      <img className='w-full h-auto object-cover  md:rounded-[3rem] rounded-[3rem]' src="/Team-3.webp" alt="" />
      <div className='text-center'>
        <h1 className='text-2xl font-semibold'>Ana Cole</h1>
        <p className='text-gray-600'>Residential CleaneR</p>
        <p className='text-gray-600'>Ana is known for her meticulous cleaning.</p>
                    <div className="flex gap-4 mt-2 justify-center">
                      <a
                        href="https://www.youtube.com/@mdaamirkhan8381"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaYoutube className='w-4' />
                      </a>
                      <a
                        href="https://www.instagram.com/website_services_byaamir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaInstagram className='w-4'/>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/md-aamir-khan-740406283/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaLinkedin className='w-4'/>
                      </a>
                  </div>
      </div>
    </div>

    <div className="img-4 w-full">
      <img className='w-full h-auto object-cover  md:rounded-[3rem] rounded-[3rem]' src="/Team-4.webp" alt="" />
      <div className='text-center'>
        <h1 className='text-2xl font-semibold'>Lily Ray</h1>
        <p className='text-gray-600'>Quality Inspector</p>
        <p className='text-gray-600'>Lily oversees highest quality control.</p>
                    <div className="flex gap-4 mt-2 justify-center">
                      <a
                        href="https://www.youtube.com/@mdaamirkhan8381"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaYoutube className='w-4' />
                      </a>
                      <a
                        href="https://www.instagram.com/website_services_byaamir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaInstagram className='w-4'/>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/md-aamir-khan-740406283/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-xl md:text-2xl hover:scale-110 transition-transform"
                      >
                        <FaLinkedin className='w-4'/>
                      </a>
                  </div>
      </div>
    </div>
    </div>
</div>
</section>

<section className='section bg-gray300'>
  <div className='p-12 w-full'></div>
</section>

{/* point */}
<section className='section bg-gray300'>
<div className="h-auto py-10 w-full flex justify-center items-center">
        {/* <!-- Content Container --> */}
        <div className="point grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 text-center">
          {/* <!-- Customer Count --> */}
          <div>
            <h1 className="text-6xl sm:text-6xl md:text-8xl font-bold">5k</h1>
            <p className="font-thin text-xl sm:text-2xl">Customers</p>
          </div>
          {/* <!-- Repeat Count --> */}
          <div>
            <h1 className="text-8xl sm:text-6xl md:text-8xl font-bold">4.5k</h1>
            <p className="font-thin text-xl sm:text-2xl">Repeat</p>
          </div>
          {/* <!-- Satisfaction Count --> */}
          <div>
            <h1 className="text-6xl sm:text-6xl md:text-8xl font-bold">99%</h1>
            <p className="font-thin text-xl sm:text-2xl">Satisfaction</p>
          </div>
        </div>
      </div>
</section>

<section className='section bg-gray300'>
  <div className='p-12 w-full'></div>
</section>

{/* card */}
<section className='clean-sec bg-gray300'>
  <div className='main grid grid-cols-1 md:grid-cols-3 lg:grid-cols-lg xs:grid-cols-1 gap-4 px-4 md:px-8 lg:px-16 xl:px-32 ml-[1.2rem] md:ml-[8rem]'>
{/* flower jar */}
<div className='flower-jar bg-white  p-4 rounded-[3rem] justify-center items-center flex flex-col gap-4 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-[19rem] h-[19rem]'>
<GiFlowerPot className='h-[4rem] w-[4rem]'/>
<div className='text'>
  <h1 className='uppercase'>Quality</h1>
  <p className='uppercase'>every space is spotless and well-maintained.</p>
</div>
</div>

{/* house */}
<div className='house bg-white  p-4 rounded-[3rem] justify-center items-center flex flex-col gap-4 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-[19rem] h-[19rem]'>
<RiHomeHeartLine className='h-[4rem] w-[4rem]' />
<div>
  <h1 className='uppercase'>REfresh</h1>
  <p className='uppercase'>every room feeling fresh and rejuvenated.</p>
</div>
</div>

{/* sanitizer */}
<div className='sanitizer bg-white  p-4 rounded-[3rem] justify-center items-center flex flex-col gap-4 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-[19rem] h-[19rem]'>
<MdOutlineCleanHands className='h-[4rem] w-[4rem]'/>
<div>
  <h1 className='uppercase'>Sanitize</h1>
  <p className='uppercase'>top-grade sanitization techniques.</p>
</div>

</div>

<div className='award bg-white  p-4 rounded-[3rem] justify-center items-center flex flex-col gap-4 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 w-[19rem] h-[19rem]'>
<LiaAwardSolid className='h-[4rem] w-[4rem]'/>
<div>
  <h1 className='uppercase'>Awards</h1>
  <p className='uppercase'>accolades that highlight our service.</p>
</div>
</div>
  </div>
</section>

<section className='section bg-gray300'>
  <div className='p-12 w-full'></div>
</section>

{/* contact */}
<section className='contact-sec bg-gray300'>
  <Mail/>
</section>
    </>
  );
};

export default About;

