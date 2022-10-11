import React, { useState } from 'react';
import Option from '../Option/Option';

const QuestionsAll = ({quizs}) => {
    const {id,question,options}=quizs

    const [selected, setSelected] = useState();

    const handleChange = eventvalue => {
        console.log(eventvalue);
        // setSelected(event.target.value);
      };




    // console.log(options)

    // const index = quizs.map(object => object.id).indexOf(id);
    return (
        <div>

<section className="dark:bg-gray-800 dark:dark:text-gray-100">
	<div className="container flex justify-center gap-3">
		{/* <div className="w-full lg:w-1/3" ></div> */}
		<div className=" w-full p-6 lg:w-2/3 md:p-8 lg:p-12 border-2 border-indigo-600 m-3">
			<div>
            <h2 className="text-2xl font-semibold leading-none">Question :{question}</h2>
            </div>
				
			
			<p className="mt-4 mb-8 text-sm">
                {
                    
                        options.map(option=> <Option option={option} handleChange={handleChange}></Option>)
                       
                }
            </p>
			
		</div>
	</div>
</section>

        </div>
    );
};

export default QuestionsAll;