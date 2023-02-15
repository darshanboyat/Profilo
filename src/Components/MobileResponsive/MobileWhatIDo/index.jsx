import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import RecommendIcon from '@mui/icons-material/Recommend';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import Heading from '../Heading'
// import style from './WhatIDo.module.css'

const Index = () => {
    return (
        <>
            <Heading heading="What I Do"/>
            <table className='w-full text-left'>
                <tr className='h-32'>
                    <td data-aos="fade-right" className="font-bold text-2xl border-b-2 pb-4 "><ComputerIcon sx={{ fontSize: 80, mr: 5, opacity: 0.5 }} />Single Page Application
                        <br />
                        <p className='text-sm text-gray-400 font-medium mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore facilis voluptatibus, perferendis vitae nihil, quisquam quod placeat tenetur ratione ea dignissimos tempore ab reiciendis.</p>
                    </td>

                </tr>
                <tr className='h-32'>
                    <td data-aos="fade-left" className="font-bold text-2xl border-b-2 pb-4"><RecommendIcon sx={{ fontSize: 80, mr: 5, opacity: 0.5 }} />React js Development
                        <br />
                        <p className='text-sm text-gray-400 font-medium mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore facilis voluptatibus, perferendis vitae nihil, quisquam quod placeat tenetur ratione ea dignissimos tempore ab reiciendis.</p>
                    </td>
                </tr>
                <tr className='h-32'>
                    <td data-aos="fade-right" className="font-bold text-2xl border-b-2 pb-4 "><ManageSearchIcon sx={{ fontSize: 80, mr: 5, opacity: 0.5 }} />Redux
                        <br />
                        <p className='text-sm text-gray-400 font-medium mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore facilis voluptatibus, perferendis vitae nihil, quisquam quod placeat tenetur ratione ea dignissimos tempore ab reiciendis.</p>
                    </td>
                </tr>
                <tr>
                    <td data-aos="fade-left" className="font-bold text-2xl border-b-2 pb-4"><SpeedIcon sx={{ fontSize: 80, mr: 5, opacity: 0.5 }} />Redux Toolkit
                        <br />
                        <p className='text-sm text-gray-400 font-medium mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore facilis voluptatibus, perferendis vitae nihil, quisquam quod placeat tenetur ratione ea dignissimos tempore ab reiciendis.</p>
                    </td>
                </tr>
                <tr className='h-32'>
                    <td data-aos="fade-right" className="font-bold text-2xl border-b-2 pb-4 "><ElectricBoltIcon sx={{ fontSize: 80, mr: 5, opacity: 0.5 }} />API Integration
                        <br />
                        <p className='text-sm text-gray-400 font-medium mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore facilis voluptatibus, perferendis vitae nihil, quisquam quod placeat tenetur ratione ea dignissimos tempore ab reiciendis.</p>
                    </td>
                </tr>
                <tr>
                    <td data-aos="fade-left" className="font-bold text-2xl border-b-2 pb-4"><StorageIcon sx={{ fontSize: 80, mr: 5, opacity: 0.5 }} />Express.js
                        <br />
                        <p className='text-sm text-gray-400 font-medium mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore facilis voluptatibus, perferendis vitae nihil, quisquam quod placeat tenetur ratione ea dignissimos tempore ab reiciendis.</p>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default Index