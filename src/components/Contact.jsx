import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black flex justify-center items-center p-16'>
            <form method='POST' action="https://getform.io/f/d7380df4-6ae9-41fd-aeb9-ff53fbdcd6b8" className='flex flex-col max-w-[600px] w-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-400 text-gray-100'>Contact</p>
                    <p className='text-gray-400 py-4'>Submit the form below or shoot me an email - adacatucci@proton.me</p>
                </div>
<input className='bg-gray-100 my-4 p-2 rounded-md' type="text" placeholder='Name' name='name' />
<input className='my-4 p-2 bg-gray-100 rounded-md' type="email" placeholder='Email' name='email' />
<textarea className='bg-gray-100 my-4 p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
<button className='text-white rounded-md bg-gradient-to-r from-gray-600 to-gray-900 hover:from-cyan-500 hover:to-blue-800 px-4 py-3 my-8 mx-auto flex - items-center'>Let's Collaborate</button>
            </form>



        </div>
    )
}

export default Contact