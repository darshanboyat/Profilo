import React from 'react'
import style from './Heading.module.css'

const Index = (props) => {
  return (
    <div className={`${style.heading} flex text-center text-7xl justify-center font-semibold my-4`}>{props.heading}</div>
  )
}

export default Index