"use client"

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import  Link  from 'next/link';

const Header = () => {

    const [open, setOpen] = React.useState(false);
    const [userOpen, setUserOpen] = React.useState(false);

    const Menu=[{

        id:1,
        nmae:'Home',
        path:'/'
    },
    {

        id:2,
        nmae:'Services',
        path:'/service'
    },
    {

        id:3,
        nmae:'Contact Us',
        path:'/contact'
    },
    ]
  return (
    <div className='flex items-center justify-between p-4 shadow-md'>
        <div className='flex items-center gap-10'>

        <Image src="/logo.svg" alt="logo" width={170} height={80} />
        <ul className={open? 'flex flex-col absolute top-20 gap-6 justify-center items-center ml-[-2.8%] w-[100%] z-40 md:hidden text-2xl font-bold bg-blue-100 text-blue-950 bg-opacity-40 py-5':'gap-8 hidden md:flex' } >
           {Menu.map((item,index)=>(
            <Link href={item.path} key={index}>
               <li 
               className='cursor-pointer hover:scale-105 hover:text-primary hover:font-bold transition-all ease-in-out'>{item.nmae}</li>
               </Link>
            ))}
        </ul>
            </div>
            <Link href='#' className='transition-all ease-in-out' onClick={()=>setUserOpen(!userOpen)} onMouseOver={()=>setUserOpen(true)} onMouseOut={()=>setUserOpen(true)} className='border border-primary rounded-full p-2 hover:bg-secondary absolute right-16 md:relative md:right-2'> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
            </Link>
            <ul onMouseOver={()=>setUserOpen(true)} onMouseOut={()=>setUserOpen(false)} className={userOpen?'shadow-lg z-50 absolute pl-4 pr-16 right-4 top-[11.4%]':'hidden'}>
                <Link href='#'><li className='pb-2 cursor-pointer hover:scale-105 hover:text-primary hover:font-bold transition-all ease-in-out'>Dashboard </li></Link>
                <Link href='#'><li className='pb-2 cursor-pointer hover:scale-105 hover:text-primary hover:font-bold transition-all ease-in-out'>Account </li></Link>
                <Link href='#'><li className='pb-2 cursor-pointer hover:scale-105 hover:text-primary hover:font-bold transition-all ease-in-out'>Logout</li></Link>
            </ul>
            <div className='md:hidden cursor-pointer hover:scale-110 scale-105 transition-all ease-in-out' onClick={()=>setOpen(!open)}>
                {open?(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>)
            :(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>)
        }
            </div>
            </div>
  )
}

export default Header