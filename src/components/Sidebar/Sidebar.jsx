import React from 'react';
import "./Sidebar.css"
import {sidecom} from '../../data/sidecom'
import SideItem from '../SideItem/SideItem'

const Sidebar = () => {
  return (
    <div className='h-full p-3'>
      <div className='flex flex-col items-center h-full bg-teal-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-teal-100 p-3'>
          <p className='text-cyan-100 text-[25px] mb-5 uppercase font-bold tracking-widest'>
              Components
          </p>
          <div className='rounded-md p-2 w-full h-full'>
              {sidecom.map((item) => (
                <SideItem key={item.id} alias={item.alias}/>
              ))}
          </div>
      </div>
    </div>
  )
}

export default Sidebar