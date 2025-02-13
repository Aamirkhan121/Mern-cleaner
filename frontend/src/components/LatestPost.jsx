import React from 'react'


const LatestPost = () => {

  
  return (
    <>
     <div className="flex flex-col justify-center items-center">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 text-center'>
        <div className="text-5xl font-bold">Latest Post</div>
        <div className="mt-4">
        <p className="text-xl uppercase font-normal">Our recent articles</p>
          <p className="mt-2 text-gray-600 font-thin sm:font-normal">
            Simplify your tasks and maintain the cleanliness.
          </p>
        </div>
        </div>

        </div> 
    </>
  )
}

export default LatestPost
