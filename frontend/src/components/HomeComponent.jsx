import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import LatestPost from './LatestPost';
import axios from 'axios';
import { FcFaq } from "react-icons/fc";
import Accordian from "./Accordian"
import Mail from './Mail';
import Efficient from './Efficient';


const HomeComponent = () => {
  const API_URL = "https://mern-cleaner.onrender.com";





  // data fetch
  const [articles, setArticles] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/get-article`);
        setArticles(response.data.data);
        //  console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  } , []);
  return (
    <>
      {/* Banner-section start */}
      <div className="flex flex-col justify-center items-center bg-gray-800 relative">
        <div className="w-full max-w-screen-xl relative">
          {/* Image section */}
          <img
            src="/cleaner-banner.jpg"
            alt="cleaner-image"
            className="w-full h-[20rem] sm:h-[30rem] md:h-[40rem] lg:h-[45rem] rounded-3xl shadow-lg object-cover mb-4 mt-4"
          />

          {/* Rounded Text Box On Top of Image */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-elaichi pt-8 bg-opacity-90 w-[90%] sm:w-[70%] md:w-[50rem] h-auto sm:h-[20rem] md:h-[26rem] text-center text-gray-800 p-4 rounded-3xl shadow-md">
              <p className="tracking-custom font-bold text-sm sm:text-base md:text-lg">
                GO-TO CLEANERS
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold mt-2 tracking-custom">
                EXPERT
              </h1>
              <p className="tracking-custom text-4xl sm:text-5xl md:text-7xl font-thin italic">
                CLEANING
              </p>
              <p className="text-sm sm:text-base mb-2 md:text-xl font-thin mt-4">
                Creating cleaner, healthier spaces so you can focus on what matters most and relax
                on the weekends.
              </p>
              <Link to="/" className="uppercase text-white bg-gray rounded-full p-2 mt-4">Explore</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Banner-section end */}

      {/* Home-Refresh start */}
      <div className="service h-[40rem] mt-10 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 bg-gray-800">
        <div className="service-image mt-20 relative h-[18rem]">
          <img
            className="h-[18rem] sm:h-[22rem] md:h-[28rem] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            src="/service-img.webp"
            alt="Deep Cleaning"
          />
          <div className="pop-up-card rounded-full shadow-lg bg-gray opacity-90  text-white absolute top-[20%] left-1/2 transform -translate-x-1/2 p-4">
            <h4 className="text-2xl md:text-4xl text-center">2X</h4>
            <p className="font-thin tracking-custom text-center">Deep Cleaning</p>
          </div>
        </div>
        <div className="service-text mt-4 md:mt-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <img className="w-8 h-8" src="/fresh-icon.svg" alt="Fresh Icon" />
            <h5 className="tracking-custom uppercase font-medium">Fresh</h5>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-spacing">
            Home <span className="italic font-thin">Refresh.</span>
          </h1>
          <p className="font-light mb-2 leading-normal tracking-spacing mt-4 text-sm md:text-base lg:text-lg">
            Experience the ultimate expert cleaning — Creating spaces where comfort and productivity
            thrive.
          </p>
          <Link to="/services" className="uppercase text-white bg-gray rounded-full p-2 mt-4">Explore</Link>
        </div>
      </div>
      {/* Home-Refresh end */}


      {/* Office-Maintenance start */}

      <div className="service h-[40rem] mt-10 px-4 md:pl-[20rem] md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 bg-gray-800">
        {/* Image Section */}
        <div className="service-image order-1 md:order-2 mt-20 relative h-[18rem]">
          <img
            className="h-[18rem] sm:h-[22rem] md:h-[28rem] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
            src="/office-img.webp"
            alt="Deep Cleaning"
          />
          <div className="pop-up-card rounded-full shadow-lg bg-gray opacity-90 text-white absolute top-[20%] left-1/2 transform -translate-x-1/2 p-4">
            <h4 className="text-2xl md:text-4xl text-center">24/7</h4>
            <p className="font-thin tracking-custom text-center">Maintenance</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="service-text order-2 md:order-1 mt-4 md:mt-20 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <img className="w-8 h-8" src="/fresh-icon.svg" alt="Fresh Icon" />
            <h5 className="tracking-custom uppercase font-medium">Fresh</h5>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-spacing">
            Office <span className="italic font-thin">Cleaners.</span>
          </h1>
          <p className="font-light mb-2 leading-normal tracking-spacing mt-4 text-sm md:text-base lg:text-lg">
            The cleaning team that cares — Experts in creating pristine homes and productive workspaces.
          </p>
          <Link to="/about" className="uppercase text-white bg-gray rounded-full p-2 mt-4">Explore</Link>
        </div>
      </div>
      {/* Office-Maintenance end */}

     <div>
      <Efficient/>
     </div>

<LatestPost/>
<div className='h-20 bg-gray-800'></div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 bg-gray-800 p-5 md:p-10 text-center px-4">
  {articles.filter((_, index) => index === 0 || index === 2)
    .map((article) => (
      <div key={article._id} className="flex flex-col items-center">
        <Link to={`/get-article/${article._id}`}>
          {/* Image Section */}
          <div className="w-full max-w-[43rem] h-[30rem] rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Details */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            <h1 className="text-gray-800 font-medium">{article.title}</h1>
            <p className="text-gray-600 text-sm">
              {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </p>
            <div className="flex justify-center items-center">
              <hr className="w-[10rem] border-t-2 border-gray-300" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-800 font-medium text-sm">{article.author}</p>
              <hr className="w-8 border-t-2 border-gray-400 mt-1" />
            </div>
          </div>

          {/* Subtitle Section */}
          <div className="m-6">
            <p className="capitalize text-3xl text-gray-700">{article.subtitle}</p>
          </div>
        </Link>
      </div>
    ))}

  {/* Centered "View All" Link */}
</div>
<div className="flex justify-center items-center m-10">
        <Link
      to="/blogs"
      className="uppercase bg-elaichi text-black rounded-full py-3  px-6"
    >
      View All
    </Link>
   
  </div>

  {/* Accordian */}
  <div className='flex flex-col justify-center items-center m-10'>
  <div className="flex justify-center items-center gap-4 m-10">
  <FcFaq className='w-8 h-8'/>
    <p className="text-gray-800 font-bold flex items-center justify-center"> FAQs</p>
  </div>
  <div className="flex flex-col items-center">
    <h1 className="text-gray-600 text-center font-bold text-5xl mb-8">Have Questions?</h1>
    <p className='mb-8 max-w-[20rem] text-center'>
      We’re committed to making your experience as smooth and straightforward as possible.
    </p>
  </div>
  <div className='flex justify-center items-center w-full'>
    <div className='max-w-[40rem] w-full mb-20'>
      <Accordian />
    </div>
  </div>
</div>

{/* Email */}

<Mail/>


    </>
  );
};

export default HomeComponent;
