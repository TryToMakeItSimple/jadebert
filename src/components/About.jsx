import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1f1203f8] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                About</p>
        </div>
        <div></div>
       </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='text-4xl font-bold'>
            <p>Hi. Jade here!! thanks for visiting.. Please take a look around.</p>
            </div>  
            <div>
                <p>I have the confidence in my abilities and an enthusiasm for my chosen subject- I am fully prepared to be a dedicated and diligent student whilst at college. I have an insatiable curiosity for my subject that will be valuable when individual study is demanded of me, and this is an aspect of the course that particularly enthuses me. I have the ultimate ambition of becoming a software engineer and hope that with my qualifications gained at college this will be a goal well within my reach. Software engineering is a career that whilst the need for and use of computers in society progresses, the opportunities in this realm will become ever more exciting and engaging and I look forward to the time when I can progress into professional life. </p>
            </div>
            </div>
      </div>
    </div>
  )
}

export default About
