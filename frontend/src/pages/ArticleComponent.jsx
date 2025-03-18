import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ArticleComponent = () => {

  const {id}= useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://mern-cleaner-1.onrender.com/api/get-article/${id}`);
        // console.log(response.data.data);
        setArticle(response.data.data);
      } catch (error) {
        // console.error(error);
      }
    };
    fetchArticle();
  }, [id]);

   // Handle loading state and avoid accessing properties of null
  // if (!article) {
  //   return <div className="text-center mt-8">Loading...</div>;
  // }
  return (
    <div className='flex flex-col items-center px-4'>
      <div className='flex flex-col items-center mt-8 mb-8'>
      <h1 className='uppercase bg-gray-700  py-2 px-4 rounded-full text-center shadow-md'>{article?.title || Loading...}</h1>
      <p className='capitalize text-4xl mt-2'>{article.subtitle}</p>
      <p className='w-full max-w-[25rem] mt-2'>{article.description}</p>
      <p className='uppercase tracking-custom mt-2 font-medium'>{article.author}</p>
      <p className="text-gray-600 text-sm mt-2 font-medium">
            {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </p>

      </div>
<div className='w-full max-w-[43rem] h-[30rem] rounded-lg overflow-hidden mb-8'>
      <img className='w-full h-full object-cover' src={article.image} alt="image" />
</div>

{/* section fetch  */}

<div className='w-full max-w-[50rem] px-4'>
{article.sections && article.sections.map((section) => ( 
  <div key={section._id} className='flex flex-col mt-8'>
    <h1 className='text-4xl font-bold'>{section.title}</h1>
    <p className='mt-2'>{section.content}</p>
    <p className='mt-2'>{section.description}</p>
  </div>
))}
</div>
<div className='w-full max-w-[50rem] mb-20'>
  {article.conclusion && (
    <div className='flex flex-col mt-8'>
      <h1 className='text-4xl font-bold'>{article.conclusion.title}</h1>
      <p className='mt-2'>{article.conclusion.content}</p>
      <p className='mt-2'>{article.conclusion.description}</p>
    </div>
  )}
</div>

    </div>
  )
}

export default ArticleComponent
