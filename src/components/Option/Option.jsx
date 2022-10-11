import React, { useState } from 'react';


const Option = ({option,handleChange}) => {


    return (
        <div>
            {/* <p>{option}</p> */}
            <div  className='m-4 text-lg'>
               
              

            
    

               <label className='m-2'>
                <input  onClick={()=>handleChange({option})} className='m-2' type="radio" name="selected"
                 /> 
                 {option}</label>

              

                
              
       
        
      </div>
        </div>
    );
};

export default Option;