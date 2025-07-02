import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div>

      <div name='home' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black'>

        {/* container*/}

        <div className='max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full'>
          <p className='text-gray-100 text-4xl'>Hi, my name is ADINA CATUCCI</p>
          <p className='text-gray-400 py-4 max-w-[700]'>
            This is my website entry level portfolio as a front end developer. Please, take a look around.

          </p>
          <div>
            
            
            <button className='text-gray-100 group px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-600 to-gray-900 hover:from-cyan-500 hover:to-blue-800'>View Work
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