import React, { useEffect, useState } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, RadarChart, PolarRadiusAxis, PolarAngleAxis, PolarGrid, Radar, RadialBarChart, RadialBar } from 'recharts';


// import React, { PureComponent } from 'react';




import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const quizs=useLoaderData()
    const allQuizs=quizs.data
    // console.log(allQuizs)



    const [quizsData,setQuizsData]=useState([]);

  


    useEffect(()=>{
        // const quizvalue=allQuizs.map(quizTotal=>{
        //     return quizTotal;
        // })
        console.log(allQuizs)
        setQuizsData(allQuizs)

    })

    return (
        <div>
            <div className='text-center'>
                <LineChart  width={500} height={300} data={quizsData}>

                     <XAxis dataKey="name" />
                         <YAxis />
                          <Tooltip />
                        <Legend />

                    {/* <Line type="monotone" dataKey="id" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                     <Line type="monotone" dataKey="total" stroke="#82ca9d" />

                </LineChart>
           
                </div>
                <div>
                    <BarChart width={500} height={300} data={quizsData} >

                    <XAxis dataKey="name" />
                           <YAxis />
                           <Tooltip />
                           <Legend />
                          <Bar dataKey="total" fill="#8884d8" />
                          {/* <Bar dataKey="id" fill="#82ca9d" /> */}

                    </BarChart>


                </div>
                <div>
                   

                
                </div>

        </div>
  
       
    );
};

export default Statistics;