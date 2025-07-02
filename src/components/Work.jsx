import React from 'react'
import Scloud from '../assets/scloud.png'
import Game from '../assets/game.png'
import Port from '../assets/port.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-gradient-to-t from-gray-800 to-black'>
            <div className='max-w-auto mx-auto p-16 flex flex-col justify-center w-full h-full sm:text-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-400'>Work</p>
                    <p className='py-6'>Some of my recent work</p>

                
                    <p className='py-6'>2022</p>

                </div>


                {/**container */}
                <div className='grid sm:grid-cols2 md:grid-cols-2 gap-4 lg:grid-cols-3'>


                    {/**grid item */}
      
                        <div style={{ backgroundImage: `url(${Scloud})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                        {/*hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Canva Sites #1
                        </span>

                        </div>
                    </div>


                    <div style={{ backgroundImage: `url(${Game})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                        {/*hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Canva Sites #2

                            </span>

                        </div>
                    </div>



                    {/**grid item */}
                    <div style={{ backgroundImage: `url(${Port})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                        {/*hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Canva Sites #3

                            </span>

                        </div>
                    </div>



                </div>


            </div>
        </div>
    )
}

export default Work