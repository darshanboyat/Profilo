import React from 'react'
import resume from '../../Assets/cv.pdf'
import style from './Resume.module.css'

const Index = () => {
    return (
        <div className="border-b-2 pb-8">
            <h1 id="cv" className={`ml-60 text-7xl ${style.heading} mt-40 pb-10`}>Curriculum Vitae</h1>
            <div  data-aos="flip-left" className="ml-40 ">
                <iframe src={resume} title="Resume" className="ml-96 pl-10 h-screen w-6/12 bg-cover rounded-2xl" />
            </div>
        </div>
    )
}

export default Index