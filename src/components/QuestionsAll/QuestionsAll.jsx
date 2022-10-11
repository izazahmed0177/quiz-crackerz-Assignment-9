import React from 'react';

const QuestionsAll = ({quizs}) => {
    const {id,question,options}=quizs
    console.log(options)
    return (
        <div>
            <h1>question :{question}</h1>
            <section className='text-gray-600 bg-slate-200'>
                <div className='container px-5 py-24 mx-auto'>
                    <div className='flex flex-col text-center w-full mb-20'>
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Question :{question}</h1>

                    </div>

                    <div className='lg:w-2/3 w-full mx-auto overflow-auto'>
                    {/* <div className='border-t-2 border-b-2 border-gray-500 px-4 py-3 flex flex-row gap-3'> */}
                    <div className=''>
                    
                   

                
                   

                    


                           <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                                  <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label for="bordered-radio-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[0]}</label>
                            </div>
                           <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                                <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="bordered-radio-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[1]}</label>
                           </div>








                        

                        
                     </div>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default QuestionsAll;