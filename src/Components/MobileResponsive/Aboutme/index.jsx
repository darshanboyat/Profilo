import React from 'react'
import Heading from '../Heading'
import cv from '../../..//Assets/cv.pdf'
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const Index = () => {
  return (
    <div className='my-24 text-left p-2'>
      <Heading heading="About me" />

      <div data-aos="zoom-in-down" className="flex flex-col">
        <div className="w-full">
          <p className={`text-xl font-bold my-8 text-left`}>I'm <span className={`text-slate-600`}>Darshan Boyat</span>, a Frontend Developer</p>
          <p className={`w-screen font-semibold`}>
            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team.
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Delivering work within time and budget which meets client’s requirements is our moto.
            Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div data-aos="zoom-in-down" className="flex flex-col items-center justify-center w-4/12 h-auto">
          <a className='outline outline-cyan-500 w-56 rounded-xl font-bold mt-4  ml-52 px-2 py-4' href={cv} download="DarshanBoyatCV">DOWNLOAD RESUME <FileDownloadIcon /></a>
        </div>
      </div>
      <div className="mt-5 border-b-2 pb-8 flex flex-col">
        <table>
          <tr className='text-center'>
            <td data-aos="zoom-in" className='border-b-2 text-xl px-24 text-slate-500'><span className='font-bold text-black'> 2.8 </span><br /> Year Experience</td>
          </tr>
          <tr className='text-center'>
            <td data-aos="zoom-in" className='border-b-2 text-xl px-24 text-slate-500'><span className='font-bold text-black'> 3 </span><br />Certificates</td>
          </tr>
          <tr className='text-center'>
            <td data-aos="zoom-in" className='text-xl px-24 text-slate-500'><span className='font-bold text-black'> 10+ </span><br />Projects</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Index