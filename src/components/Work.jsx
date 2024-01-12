import React from 'react'
import CalculatorImg from '../assets/calculator.png'
import expensetrackerImg from '../assets/expensetracker.png'
import analogImg from '../assets/analogclock.png'
import musicImg from '../assets/music.png'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#1f1203f8]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/*Container*/}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>

                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${CalculatorImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects*/}
                    <div className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-1.5xl font bold text-white tracking-wider ">   
CALCULATOR
                            </span>    
                           
                        
                    </div>
                </div>
                <div style={{backgroundImage: `url(${expensetrackerImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects*/}
                    <div className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-1.5xl font bold text-white tracking-wider ">   
EXPENSE TRACKER
                            </span>    
                         
                        
                    </div>
                </div>
                <div style={{backgroundImage: `url(${analogImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects*/}
                    <div className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-1.5xl font bold text-white tracking-wider ">   
ANALOG CLOCK
                            </span>    
                         
                        
                    </div>
                </div>

                <div style={{backgroundImage: `url(${musicImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects*/}
                    <div className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-1.5xl font bold text-white tracking-wider ">   
MUSICPLAYER
                            </span>    
                         
                        
                    </div>
                </div>



            </div>
        </div>
      
    </div>
  )
}

export default Work
