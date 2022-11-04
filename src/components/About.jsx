import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-t from-gray-800 to-black text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full p-8'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-cyan-400'>About</p>
                    </div>
                    <div></div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'><p> Hi, nice to meet you. Please, take a look around.</p></div>

                    <div>
                        <p>Highly motivated, self-starting front end developer and web designer. 
New responsive web design certificated with projects. 
Looking to deliver a very good web development skills in React, 
and and excellent skills in design to create and give the best web experience.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About