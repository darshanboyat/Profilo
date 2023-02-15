import React from 'react'
import Heading from '../Heading'
import Badge from './Badge'
import Type from './Typist'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Index = () => {
  return (
    <div>
      <Heading heading="Welcome" />
      <Badge />
      <Type />
      <div className="flex flex-col ml-4 justify-center text-center">
        <a href="#contact">
          <button className='bg-green-400 rounded-2xl py-2 w-40 mb-2'>Hire me</button>
        </a>
        <a href="#about-me">Learn more about me <KeyboardArrowDownIcon/></a>
      </div>
    </div>
  )
}

export default Index