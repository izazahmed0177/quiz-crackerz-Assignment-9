import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizQuestions = () => {
    const question=useLoaderData()
    console.log(question)
    console.log(question.data)
    return (
        <div>
            <h1>quuuuuuuuu</h1>
        </div>
    );
};

export default QuizQuestions;