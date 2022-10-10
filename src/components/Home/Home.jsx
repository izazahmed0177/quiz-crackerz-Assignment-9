import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import QuizCart from '../QuizCart/QuizCart';

const Home = () => {
    const quizs=useLoaderData()
    const allQuizs=quizs.data
    console.log(quizs)

    // const handleQuizCart=(id)=>{

    // }
    
    return (
        <div>
           <Header></Header>

           <h1 className='text-center text-5xl font-bold'>All Quizs</h1>
          
           {/* <h1>quiz:{quizs.data.length}</h1> */}

           <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
       {
        allQuizs.map(quiz=> <QuizCart key={quiz.id} quiz={quiz}></QuizCart>)

       }
      </div>
    </div>
        </div>
    );
};

export default Home;