import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import GitHub from '../assets/github.png'
import NodeJs from '../assets/node.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#1f1203f8] text-gray-300'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-8'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>//Please see below for the technology I've worked with</p>
            </div>
            <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                <p className='my-4'>GitHub</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={NodeJs} alt="HTML icon" />
                <p className='my-4'>NodeJs</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
