import React, {useRef, useState } from 'react';
import { BiSolidTimer } from "react-icons/bi";


const cards = [
    {
      id: 1,
      image: "/third-img_files/6706104d4f29e916e4cae488_img_3P5u.webp", // Replace with actual image paths
      title: "John DOE",
      subtitle: "Tech Global Co.",
      description: "“Clean Office, Happy Team! We’ve received nothing but compliments from both staff and clients on how clean and organized our office. It’s made such a difference in our workplace morale.”",
    },
    {
      id: 2,
      image: "/third-img_files/6706104d4f29e916e4cae486_img_KsHd.webp",
      title: "jane peterson",
      subtitle: "Home owner",
      description: "“Stress-Free and Sparkling Clean! I have never been more impressed with a cleaning service! It feels amazing to come home to a clean house without having to worry about it!”",
    },
    {
      id: 3,
      image: "/third-img_files/6706104d4f29e916e4cae484_img_PeBB.webp",
      title: "Carlo martinez",
      subtitle: "Innovate Group",
      description: "“Professional and Detailed! Our office has never looked better! The cleaners are punctual, and their attention to high-traffic areas is exactly what we needed. Great value and service!”",
    },
    {
      id: 4,
      image: "/third-img_files/6706104d4f29e916e4cae482_img_1g1n.webp",
      title: "jane roberts",
      subtitle: "brightech co.",
      description: "“Impeccable Service! We’ve been using this cleaning service for our office for over a year now, and the results are always impressive. Highly recommend!”",
    },
    {
      id: 5,
      image: "/third-img_files/6706104d4f29e916e4cae481_img_ORsO.webp",
      title: "mark harrison",
      subtitle: "home owner",
      description: "“A Life-Changer for Our Home! As a busy dad, keeping up with the housework can be overwhelming, but this cleaning service has been a lifesaver and the team is so friendly and respectful.”",
    },
    {
      id: 6,
      image: "/third-img_files/6706104d4f29e916e4cae483_img_RTH7.webp",
      title: "Rachel Davis",
      subtitle: "home owner",
      description: "“Thorough and Trustworthy! I was hesitant to hire a cleaning service, but after seeing the results, I’m so glad I did. They take care of my house with such care.”",
    },
  ];

const Efficient = () => {

     const [currentImage, setCurrentImage] = useState("/regular-img.webp");
      const[displayText,setDisplayText]=useState('')
      const textRef=useRef(null)



        const handleImageClick = (image,text) => {
          setCurrentImage(image);
          setDisplayText(text)
          setTimeout(() => {
            textRef?.current?.scrollIntoView({behavior:'smooth'})
          }, 1000);
        }
      
      
        const [startIndex, setStartIndex] = useState(0);
      
        const handleNext = () => {
          setStartIndex((prevIndex) => (prevIndex + 3) % cards.length);
        };
      
        const handlePrev = () => {
          setStartIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 3 : prevIndex - 3
          );
        };
      
        const visibleCards = cards.slice(startIndex, startIndex + 3);

  return (
    <>
       {/* wave section */}
       <div className='relative w-full h-[10rem] bg-blue-500'>
        <div className="absolute w-full bottom-0 left-0 h-[10rem] overflow-hidden leading-none">
          <svg
            className="block w-full h-[10rem]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#D6E3C2"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,160C960,181,1056,203,1152,218.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

      </div>
      {/* Wave Section end */}
      <div className='h-20 bg-elaichi'></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 bg-elaichi p-5 md:p-10">
            {/* Left Side Text Section */}
            <div className="text flex flex-col items-center justify-center space-y-5">
              <div className="uppercase flex items-center justify-center gap-2 text-lg md:text-xl font-semibold text-gray-800">
                <BiSolidTimer className='w-20 h-20'/> Efficient
              </div>
              <h1 className="text-4xl md:text-6xl text-center font-bold text-gray-900">
                Professional Cleaning For Every Occasion
              </h1>
              <p className="text-base md:text-lg text-center text-gray-600">
                Whether you're maintaining a pristine workspace, or simply keeping
                your home in top shape, our services are designed to meet all your
                needs.
              </p>
              <div className="link flex flex-col space-y-3 text-center">
                <div>
                  <button
                    onClick={() =>
                      handleImageClick(
                        "/regular-img.webp",
                        "For regular maintenance, our services are tailored to keep your living spaces immaculate."
                      )
                    }
                    className="text-blue-600 uppercase filter blur-[1px] hover:blur-none transition duration-500"
                  >
                   Regular Cleaning
                  </button>
                </div>
                <div>
                  <button
                    onClick={() =>
                      handleImageClick(
                        "/deepclean-img.webp",
                        "Consistent cleaning solutions that keep your workspace organized and professional."
                      )
                    }
                    className="text-blue-600 uppercase filter blur-[1px] hover:blur-none transition duration-500"
                  >
                    Deep Cleaning
                  </button>
                </div>
                <div>
                  <button
                    onClick={() =>
                      handleImageClick(
                        "/move-in-out-clean-img.webp",
                        "Helping you transition smoothly into a new space or leave a lasting impression on your old one."
                      )
                    }
                    className="text-blue-600 uppercase filter blur-[1px] hover:blur-none transition duration-500"
                  >
                    Move-In/Out Cleaning
                  </button>
                </div>
              </div>
            </div>
      
            {/* Right Side Image Section */}
            <div className="image flex flex-col items-center space-y-5">
              <img
                src={currentImage}
                alt="Selected"
                className="w-full h-[30rem] max-w-md rounded-[3rem]  shadow-md"
              />
              <p
                ref={textRef}
                className="mt-5 text-base md:text-lg text-gray-700 text-center px-5"
              >
                {displayText}
              </p>
            </div>
          </div>

          {/* card section start */}
<div className='h-20 bg-gray-800'></div> 

<div className="relative bg-gray-100 mb-20 py-8">
      <div className="container mx-auto px-4">
        {/* Buttons */}
        <div className="absolute top-[-3rem] right-20 md:right-20 flex gap-2">
          <button
            onClick={handlePrev}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 text-3xl sm:text-4xl"
          >
            &#8249; {/* Left Arrow */}
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 text-3xl sm:text-4xl"
          >
            &#8250; {/* Right Arrow */}
          </button>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 overflow-hidden">
          {visibleCards.map((card) => (
            <div
              key={card.id}
              className="card w-[20rem] h-[25rem] mb-4 bg-white rounded-lg shadow-lg relative"
            >
              {/* Circle Image */}
              <div className="absolute top-[-18x] left-1/2 transform -translate-x-1/2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[8rem] h-[8rem] rounded-full border-4 border-white shadow object-cover"
                />
              </div>

              <div className="pt-[10rem] w-[20rem] p-4 text-center justify-center mt-[8rem] align-middle"> 
                <h3 className="text-lg font-bold mb-2 uppercase">{card.title}</h3>
                <h4 className="text-md text-gray-600 mb-2 uppercase text-semibold">{card.subtitle}</h4>
                <p className="text-gray-600 text-md tracking-spacing">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
{/* card section end */}
<div className='h-20 bg-gray-800'></div>
    </>
  )
}

export default Efficient
