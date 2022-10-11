import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionsAll from '../QuestionsAll/QuestionsAll';

const QuizQuestions = () => {
    const questionAllData=useLoaderData()
    const questionAll=questionAllData.data
    const allQuizs=questionAll.questions
    console.log(allQuizs)
    // console.log(questionAll)
    // console.log(questionAll.data)
    // console.log(questionAll.data.questions)
    return (
        <div>
            <h1 className='text-center text-5xl font-bold m-3'>Quiz of: {questionAll.name} </h1>
            {
                allQuizs.map(quizs=><QuestionsAll key={quizs.id} quizs={quizs}></QuestionsAll>)

            }
        </div>
    );
};

export default QuizQuestions;