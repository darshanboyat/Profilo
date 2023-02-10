import React from 'react'
import style from './Contact.module.css'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const Index = () => {
    return (
        <div id="contact" >
            <h1 id="cv" className={`ml-60 text-7xl ${style.heading} mt-40 pb-10`}>Get in Touch</h1>
            <div className="flex">
                <div className="text-left ml-96 my-8">
                    <p className='text-3xl font-semibold'>ADDRESS</p>
                    <p className='text-2xl font-semibold'><LocationOnIcon /> &nbsp; 618, Brain Inventory 6th floor Shekhar Central Old Palasia Indore,<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;452001 [M. P], India</p> <br />

                    <p className='text-2xl font-semibold'><LocalPhoneIcon /> &nbsp; +91 9691174714</p>
                    <p className='text-2xl font-semibold'><EmailIcon /> &nbsp; darshboyat@gmail.com</p>
                </div>
                {/* <div className="text-left ml-40 my-8">
                    <p className='text-xl font-semibold'>SEND US A NOTE</p>
                    <form action="">
                        <input type="text" className='border-2 mr-2 my-10 px-5 py-2 rounded-xl' placeholder='Enter your name'/>
                        <input type="email" className='border-2 my-10 px-5 py-2 rounded-xl' placeholder='Enter your mail '/>
                        <textarea name="" id="" cols="55" rows="10" className='border-2 px-5 rounded-xl' placeholder='Tell us more about your needs.....'></textarea>
                        <br />
                        <button className='outline outline-offset-0 outline-blue-400 px-10 py-2 rounded-xl font-bold'>SEND <SendIcon/></button>
                    </form>
                </div> */}
            </div>
        </div>
    )
}

export default Index