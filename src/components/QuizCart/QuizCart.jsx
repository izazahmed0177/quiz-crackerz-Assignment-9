import React from 'react';
import { Link } from 'react-router-dom';

const QuizCart = ({quiz}) => {
    const{id,name,logo,total}=quiz
    
    return (
        <div>
            <div className='bg-gray-100 p-6 rounded shadow-lg'>
      <img
        className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={logo}
        alt=''
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
      <p className='text-gray-700 '>Questions: {total}</p>
      {/* <p className='text-gray-700 font-bold'>Price: {price}$</p> */}

      {/* <button
        type='button'
        className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400'
      >
       <Link to={`/quiz/${id}`}> Add To Cart</Link>
      </button> */}


      <Link to={`/quiz/${id}`}>

        
        <button
        type='button'
        className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400 flex justify-center  items-center'>
          <div> Go To Quiz</div>
      
       <div>
       <svg className='h-5 w-6 mt-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

       </div>
      </button>

      </Link>
    </div>
        </div>
    );
};

export default QuizCart;