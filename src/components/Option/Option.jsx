import React, { useState } from 'react';


const Option = ({option,handleChange}) => {


    return (
        <div className='m-2 text-lg  rounded hover:border-indigo-400 shadow-lg shadow-indigo-500/50'>
            {/* <p>{option}</p> */}
            <div  className=''>
               
              

            
    

               <label className=''>
                <input  onClick={()=>handleChange({option})} className='m-2' type="radio" name="selected"
                 /> 
                 {option}</label>

              

                
              
       
        
      </div>
        </div>
    );
};

export default Option;