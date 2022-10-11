import React, { useEffect, useState } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, RadarChart, PolarRadiusAxis, PolarAngleAxis, PolarGrid, Radar, RadialBarChart, RadialBar, Cell, Pie, PieChart } from 'recharts';


// import React, { PureComponent } from 'react';




import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const quizs=useLoaderData()
    const allQuizs=quizs.data
    const [quizsData,setQuizsData]=useState([]);

    useEffect(()=>{
        setQuizsData(allQuizs)

    })


    // //////////////////////////
    
    
const getPath = (x, y, width, height) => `M${x},${y + height}
C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
Z`;

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    //   TriangleBar.propTypes = {
    //     fill: PropTypes.string,
    //     x: PropTypes.number,
    //     y: PropTypes.number,
    //     width: PropTypes.number,
    //     height: PropTypes.number,
    //   };

    return (
        // <div className='flex flex-col justify-center justify-items-center'>
        <div className='grid justify-items-center gap-3'>
            <div className='text-center'>
                {/* <LineChart  width={500} height={300} data={quizsData} */}

                


                <LineChart  width={500} height={300} data={quizsData}
                >

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

                    <BarChart
          width={500}
          height={300}
          data={quizsData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {quizsData.map((entry, index) => (
              <Cell key={`cell-${index}`}  />
            ))}
          </Bar>
        </BarChart>
                    
                </div>

                <div>


                <PieChart width={400} height={400}>
                   <Pie
            dataKey="total"
            startAngle={180}
            endAngle={0}
            data={quizsData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
           <Tooltip />
        </PieChart>
                </div>



                <div>
                <RadarChart width={500} height={400}  outerRadius="80%" data={quizsData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Tooltip />
          <Radar name="Total" dataKey="total" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
                </div>

        </div>
  
       
    );
};

export default Statistics;