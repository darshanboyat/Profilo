import React from 'react'
import profilePic from '../../../../Assets/profile.JPG'
const Index = () => {
    return (
        <>
            <a href="#home" className='flex flex-col justify-center text-center'>
                <div className="relative ml-8">
                    <div className="animate-ping absolute w-24 h-24 z-0 rounded-full bg-cyan-800 ml-24 mt-28"></div>
                    <img src={profilePic} alt="" className="z-50 w-40 rounded-full ml-16 mt-20 outline-cyan-500" />
                </div>
                <h1 className='text-black font-bold text-2xl mt-4'>Darshan Boyat</h1>
            </a>
        </>
    )
}

export default Index