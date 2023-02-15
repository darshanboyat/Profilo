import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReactTypingEffect from "react-typing-effect";
import style from './Home.module.css'

const Index = () => {
    return (
        <>
            <h1 id="home" className={`text-7xl font-bold pt-40 ml-48 ${style.heading}`}>Welocome</h1>
            <div className="flex justify-center items-center h-full py-20 text-center ml-40">
                <ReactTypingEffect
                    speed={100}
                    typingDelay={20}
                    eraseSpeed={20}
                    eraseDelay={20}
                    text={["Software-Developer", "React.JS-Developer", "MERN-Stack..."]}
                    style={{fontSize: 80}}
                />
            </div>
            <h1 className='text-2xl font-semibold text-slate-400 ml-48'>Based in Indore, India</h1>
            <div className="justify-around flex px-96 ml-48 mt-20 border-b-2 pb-8">
                <button className='bg-green-400 py-4 px-10 rounded-xl text-black font-semibold drop-shadow-2xl'><a href="#contact">Hire me</a></button>
                <a className='mt-4' href='#about-me'>Learn More About Me <KeyboardArrowDownIcon /></a>
            </div>

        </>
    )
}

export default Index