import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Option from '../Option/Option';
import { BeakerIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

const QuestionsAll = ({quizs}) => {
    const {id,question,options,correctAnswer}=quizs;

    const [open, setOpen] = useState(false);
    
   
    const newQuestion=question.slice (3, -4)

   const notify = () => {
    toast.success(`${correctAnswer} Right Answer`,{autoClose:2000}, )


   };

   

    // if (open) {
    //     toast.success(`${correctAnswer} right ans`,{autoClose:2000}, )
        
    // } 
   

    const handleChange = eventvalue => {
       
        if (eventvalue.option===correctAnswer) {
           
            toast.success(`${correctAnswer} Right Answer`,{autoClose:2000})
            
        } else {
          
            toast.error(`${eventvalue.option} Wrong Answer`,{autoClose:2000})
        }
      };

    return (
        <div>

<section className="dark:bg-gray-800 dark:dark:text-gray-100">
	<div className="container flex justify-center gap-3">
		{/* <div className="w-full lg:w-1/3" ></div> */}
		<div className=" w-full p-6 lg:w-2/3 md:p-8 lg:p-12 border-2 border-indigo-600 m-3 bg-slate-600 text-white rounded shadow-lg shadow-indigo-500">
			<div className='flex'>
                <div className='flex-auto'>
                <h2 className="text-2xl font-semibold leading-none">Question : {newQuestion}</h2>
                </div>
                <div className='flex-none'>


                {

                open ? <EyeIcon  onClick={() => setOpen(!open) }
                    className="h-6 w-6" />
                    : <EyeSlashIcon onClick={() => setOpen(!open,notify())}
                        className="h-6 w-6" />            
            }
                

                </div>
            
            </div>
				
			
			<p className="mt-4 mb-8 text-sm m-4 p-5">
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