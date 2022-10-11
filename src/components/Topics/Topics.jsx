import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCart from '../QuizCart/QuizCart';

const Topics = () => {
    const quizs=useLoaderData()
    const allQuizs=quizs.data
    return (
        <div>
           <h1 className='text-center text-5xl font-bold'>All Quizs</h1>
           <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
       {
        allQuizs.map(quiz=> <QuizCart key={quiz.id} quiz={quiz}></QuizCart>)

       }
       {allQuizs.map}
      </div>
    </div>
        </div>
    );
};

export default Topics;