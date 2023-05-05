import React from 'react'
import "./Layout.css"
import Sidebar from '../Sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <div className='h-screen bg-black'>
      <div className='container h-full py-5 mx-auto'>
        <div className='flex flex-row h-full border-4 border-teal-100 shadow-lg rounded-sm'>
          <div className='border border-r-4 '>
            <Sidebar/>
          </div>
          <div className='w-full'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout