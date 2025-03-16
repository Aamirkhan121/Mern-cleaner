// src/components/PostForm.js
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LatestPost from "../components/LatestPost";
 
const API_URL = "https://mern-cleaner.onrender.com";

const Blogs = () => {
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
   <div>
    <div className="flex flex-col justify-center items-center mt-20">
   <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <img className="w-8 h-8" src="/fresh-icon.svg" alt="Fresh Icon" />
            <h5 className="tracking-custom uppercase font-medium">
            News & Insights</h5>
          </div>
    <h1 className="text-7xl">Blogs</h1>
    <p className="mt-8 uppercase tracking-spacing w-[22rem]">Stay tuned for helpful guides and inspiring content.</p>
    </div>
    <div className="flex flex-col justify-center items-center line-height-custom mt-20" >
      <LatestPost className=""/>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-center mt-20 px-4">
  {articles.map((article) => (
    <div key={article._id} className="flex flex-col items-center">
      <Link to={`/get-article/${article._id}`}>
        {/* Image Section */}
        <div className="w-full max-w-[43rem] h-[30rem] rounded-lg overflow-hidden">
          <img
            src={article?.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Details */}
        <div className="grid grid-cols-4 gap-2  mt-4">
          <h1 className="text-gray-800 font-medium">{article?.title}</h1>
          <p className="text-gray-600 text-sm">
            {new Date(article?.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </p>
          <div className="flex justify-center items-center">
            <hr className="w-[10rem] border-t-2 border-gray-300" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-800 font-medium text-sm">{article?.author}</p>
            <hr className="w-8 border-t-2 border-gray-400 mt-1" />
          </div>
        </div>

        {/* Subtitle Section */}
        <div className="m-6">
          <p className="capitalize text-3xl text-gray-700">{article?.subtitle}</p>
        </div>
      </Link>
    </div>
  ))}
</div>

   </div>
   </>
  );
};

export default Blogs;

