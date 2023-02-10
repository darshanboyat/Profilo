import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import profilePic from '../../Assets/profile.JPG'


const Index = () => {
    return (
        <>
            <div className='w-1/5 bg-slate-800 h-screen rounded-r-xl shadow-slate-900 fixed'>
                {/* <img src={logo} alt="Profilo" className='w-3/4 ml-8' /> */}
                <img src={profilePic} alt="" className="w-40 rounded-full ml-16 mt-20 outline-cyan-500" />
                <h1 className='text-white font-bold text-2xl'>Darshan Boyat</h1>

                <ul className='mt-20'>
                    <li className='text-white my-4 font-semibold '><a href="#home">Home</a> </li>
                    <li className='text-white my-4 font-semibold '><a href="#about-me">About Me</a> </li>
                    <li className='text-white my-4 font-semibold '><a href="#what-i-do">What I Do</a> </li>
                    {/* <li className='text-white my-4 font-semibold '><a href="#cv">Resume</a> </li> */}
                    <li className='text-white my-4 font-semibold '> <a href="#portfolio">Portfolio</a> </li>
                    <li className='text-white my-4 font-semibold '><a href="#contact">Contact</a> </li>
                </ul>

                <div className="social-media text-white mt-20 flex justify-around">
                    <a href="https://www.braininventory.com/"><img src="https://www.braininventory.com/favicon.png" width={30} className="rounded-3xl" alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default Index