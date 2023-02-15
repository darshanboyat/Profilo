import React from 'react'
import style from './Aboutme.module.css'
import cv from '../../Assets/cv.pdf'
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const Index = () => {
    return (
        <div className='my-24 ml-96 text-left pr-20'>
            <h1 id="about-me" className={`text-7xl heading font-bold py-24 ml-96 ${style.heading}`}>About Me</h1>

            <div data-aos="zoom-in-down" className="flex">
                <div className="w-3/4">
                    <p className={`text-2xl font-bold my-8`}>I'm <span className={`text-slate-600`}>Darshan Boyat</span>, a Frontend Developer</p>
                    <p className={`w-3/4 font-semibold`}>
                        I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team.
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        Delivering work within time and budget which meets client’s requirements is our moto.
                        Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
                    </p>
                </div>
                <div data-aos="zoom-in-down" className="flex flex-col items-center justify-center w-4/12 h-auto">
                    {/* <table className={`h-auto justify-left `}>
                        <tr className={`my-2 border-b-2`}>
                            <td> <b>Name:- &nbsp;</b> Darshan Boyat </td>
                        </tr>
                        <tr className={`my-2 border-b-2`}>
                            <td> <b>Email:- &nbsp;</b> darshboyat@gmail.com </td>
                        </tr>
                        <tr className={`my-2 border-b-2`}>
                            <td> <b>Age:- &nbsp;&nbsp;&nbsp;</b> 22 Y </td>
                        </tr>
                        <tr className={`my-2 border-b-2`}>
                            <td> <b>From:- &nbsp;</b> Sehore, 466001 [M. P] India </td>
                        </tr>
                    </table> */}

                    <a className='outline outline-cyan-500 px-4 py-4 rounded-xl font-bold' href={cv} download="DarshanBoyatCV">DOWNLOAD RESUME <FileDownloadIcon/></a>

                </div>
            </div>
            <div className="mt-5 border-b-2 pb-8">
                <table>
                    <tr className='text-center'>
                        <td data-aos="zoom-in" className='border-r-2 text-xl px-24 text-slate-500'><span className='font-bold text-black'> 2.8 </span><br /> Year Experience</td>
                        <td data-aos="zoom-in" className='border-r-2 text-xl px-24 text-slate-500'><span className='font-bold text-black'> 3 </span><br />Certificates</td>
                        <td data-aos="zoom-in" className='text-xl px-24 text-slate-500'><span className='font-bold text-black'> 10+ </span><br />Projects</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Index