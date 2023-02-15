import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import BubbleChartSharpIcon from '@mui/icons-material/BubbleChartSharp';
import HubSharpIcon from '@mui/icons-material/HubSharp';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import style from './MobNav.module.css'

const Index = () => {
  return (
    <div className={`flex w-10/12  z-50 justif-center fixed mt-52 ml-6 block md:hidden lg:hidden ${style.mobnav}`}>
        <div className={`h-16 w-full rounded-full flex justify-around items-center bg-slate-800 text-white text-9xl `}>
            <a href='#home'><HomeIcon sx={{fontSize: 30, mb: 3}}/></a>
            <a href='#about-me'><BubbleChartSharpIcon sx={{fontSize: 30, mb: 3}}/></a>
            <a href='#what-i-do'><HubSharpIcon sx={{fontSize: 30, mb: 3}}/></a>
            <a href='#portfolio'><AccountTreeIcon sx={{fontSize: 30, mb: 3}}/></a>
            <a href='#contact'><RecentActorsIcon sx={{fontSize: 30, mb: 3}}/></a>
        </div>
    </div>
  )
}

export default Index