import React, { useState } from 'react';


const Option = ({option,handleChange}) => {
    const [selected, setSelected] = useState();

    const handleChangeData = event => {
      console.log(event.target.value);
      setSelected(event.target.value);
    };
    return (
        <div>
            {/* <p>{option}</p> */}
            <div  className='m-4 text-lg'>
               
               <button onClick={()=>handleChange({option})} >

               <form>
    

               <label className='m-2'>
                <input className='m-2' type="radio" value={option} name="selected"
                id={option}
                onChange={handleChangeData}
                checked={selected === {option}}

                 /> 
                 {option}</label>

                 </form>

                 </button>
              
       
        
      </div>
        </div>
    );
};

export default Option;