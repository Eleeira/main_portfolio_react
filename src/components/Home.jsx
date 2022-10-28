import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div>

      <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container*/}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#3168D8]'> Hi my name is Adina</p>
          <h1 className='text-[#7900FF] text-4xl sm:text-7xl font-bold'>Catucci</h1>
          <h2 className='text-blue-200 '>I'm a self taught entry level front end developer</h2>
          <p className='text-blue-200 py-4 max-w-[700]'>Highly motivated, self-starting front end developer and web designer.
            New responsive web design certificated with projects.
            Looking to deliver a very good web development skills in React, and and
            excellent skills in design to create and give the best web experience.</p>
          <div>
            <button className='text-blue-200 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-700 hover:border-pink-700'>View Work
              <span className='group-hover:rotate-90 duration-300' >
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home