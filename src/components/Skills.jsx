import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Reacting from '../assets/react.png'
import Bootstrap from '../assets/bootstrap.png'
import Tailwind from '../assets/tailwind.png'
import GitHub from '../assets/github.png'
import Figma from '../assets/figma.png'


const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-200'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-16 flex flex-col justify-center w-full h-full sm:text-center'>

                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-400' >Skills</p>
                    <p className='py-4'>Technologies I know</p>
                </div>


                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='rounded-lg shadow-md shadow-[#E64F25] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                       <p className='my-4'>Html</p>
                    </div>

                    <div className='rounded-lg shadow-md shadow-[#2B75B9] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="css icon" />
                       <p className='my-4'>Css</p>
                    </div>

                    <div className='rounded-lg shadow-md shadow-[#F1DC4E] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="js icon" />
                       <p className='my-4'>Javascript</p>
                    </div>

                    <div className='rounded-lg shadow-md shadow-[#61DBFB] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Reacting} alt="react icon" />
                       <p className='my-4'>React</p>
                    </div>

                    <div className='rounded-lg shadow-md shadow-[#5B4282] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Bootstrap} alt="bootstrap icon" />
                       <p className='my-4'>Bootstrap</p>
                    </div>                   
                    
                     <div className='rounded-lg shadow-md shadow-[#44A8B3] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="tailwind icon" />
                       <p className='my-4'>Tailwind Css</p>
                    </div>                   
                    
                     <div className='rounded-lg shadow-md shadow-white hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="github icon" />
                        <p className='my-4'>GitHub</p>
                    </div>

                    <div className='rounded-lg shadow-md shadow-[#41D084] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Figma} alt="figma icon" />
                       <p className='my-4'>Figma</p>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default Skills