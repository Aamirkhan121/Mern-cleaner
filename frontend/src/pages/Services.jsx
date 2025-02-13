import React from 'react'
import Efficient from '../components/Efficient'
import Mail from '../components/Mail'

const Services = () => {
  return (
    <>
      <section className=" section flex justify-center items-center bg-gray300">
        <div className="text-center p-4 md:p-8 max-w-lg">
          <div className="mb-4">
            <p className="text-xl font-semibold text-blue-600">Expert Cleaning</p>
          </div>

          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-normal text-gray-800">Services</h1>
          </div>

          <div className="mb-6">
            <p className="text-gray-600">
              We’re passionate about delivering exceptional cleaning that goes beyond expectations.
            </p>
          </div>

          <button className="bg-blue-500 border border-black-800 px-4 py-2 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105">
            EXPLORE
          </button>
        </div>
      </section>

      <section className='section  bg-gray300 flex justify-center items-center px-8 py-16'>
        <div className='main grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className="service-left sticky top-20 self-start">
            <h6 className='uppercase font-normal tracking-spacing py-2'>we cover all bases</h6>
            <h1 className='uppercase text-5xl font-normal py-3'>Go-To EXPERT</h1>
            <p className='tracking-spacing text-lg'>We pride ourselves on delivering top-quality service every time.
              Our team brings the right skills, tools, and expertise to handle any cleaning
              challenge with precision and care.</p>
            <div className='p-8 w-full'></div>
            <a href='#about' className="bg-elaichi border border-black-800 px-4 py-2 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105">
              EXPLORE
            </a>
          </div>

          <div className="service-right" >
            <div className="service-card bg-white p-4 rounded-[3rem]">
              <h5 className='py-2 font-normal tracking-spacing'>REFRESH</h5>
              <h4 className='py-2 text-4xl font-normal'>Home Cleaning</h4>
              <p className='tracking-spacing text-lg'>Living space stays spotless, so you can enjoy a clean and comfortable environment without the hassle.</p>
            </div>

            <div className='service-card bg-white mt-4 p-4 rounded-[3rem]'>
              <h5 className='py-2 font-normal tracking-spacing'>WEEKLY</h5>
              <h4 className='py-2 text-4xl font-normal'>Recurrent Cleaning</h4>
              <p className='tracking-spacing text-lg'>Keep your space consistently clean with our flexible recurrent cleaning services. Whether weekly or monthly.</p>
            </div>

            <div className='service-card bg-white mt-4 p-4 rounded-[3rem]'>
              <h5 className='py-2 font-normal tracking-spacing'>FOCUS ON YOUR WORK</h5>
              <h4 className='py-2 text-4xl font-normal'>Office Cleaning</h4>
              <p className='tracking-spacing text-lg'>Maintain a professional and hygienic workspace with our office cleaning services.</p>
            </div>

            <div className='service-card bg-white mt-4 p-4 rounded-[3rem]'>
              <h5 className='py-2 font-normal tracking-spacing'>THE ESSENTIALS</h5>
              <h4 className='py-2 text-4xl font-normal'>General Cleaning</h4>
              <p className='tracking-spacing text-lg'>Our general cleaning service covers all the basics, ensuring your space is fresh, clean, and clutter-free.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Efficient />
      </section>
      <section className='bg-gray300 '>
        <div className='w-full p-4'></div>
      </section>
      <section className='bg-gray300 flex justify-center items-center px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <img className='rounded-[3rem]' src="/clean-1.webp" alt="" />
          </div>
          <div >
            <img className='rounded-[3rem]' src="/clean-2.webp" alt="" />
          </div>
          <div >
            <img className='rounded-[3rem]' src="/clean-3.webp" alt="" />
          </div>
          <div className='md:mt-[-14rem]'>
            <img className='rounded-[3rem] w-full h-[44rem] object-cover' src="/clean-4.webp" alt="" />
          </div>
        </div>
      </section>

      <section className='section bg-gray300'>
        <div className='p-8 w-full'></div>
      </section>

      {/* contact */}
      <section className='contact-sec bg-gray300'>
        <Mail />
      </section>
    </>
  )
}

export default Services
