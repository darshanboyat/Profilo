import React from 'react'
import profilePic from '../../Assets/profile.JPG'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import style from './Home.module.css'

const Index = () => {
    return (
        <>
            <h1 id="home" className={`text-7xl font-bold pt-40 ml-48 ${style.heading}`}>Welocome</h1>
            <div className="flex justify-center items-center h-full pt-40">
                <div data-aos="zoom-in-left" className="border-slate-900 animate-bounce border-black drop-shadow-2xl" >
                    <img src={profilePic} alt="" className="w-48 rounded-full" />
                </div>
                <div data-aos="zoom-in-right" className={`pl-20 ${style.wrapper} text-left`}>
                    <h1 data-aos="zoom-in-right" className={`text-xl my-4 font-bold ${style.textTypist}`}>Software Developer</h1>
                    <h1 data-aos="zoom-out" className={`text-xl my-4 font-bold ${style.textTypist}`}>React.JS developer</h1>
                    <h1 data-aos="zoom-in-right" className={`text-xl my-4 font-bold ${style.textTypist}`}>Freelancer.......</h1>
                </div>
            </div>
            <div className="justify-around flex px-96 ml-48 mt-20 border-b-2 pb-8">
                <button className='bg-green-400 py-4 px-10 rounded-xl text-black font-semibold drop-shadow-2xl'><a href="#contact">Hire me</a></button>
                <a className='mt-4' href='#about-me'>Learn More About Me <KeyboardArrowDownIcon/></a>
            </div>

        </>
    )
}

export default Index