import React from 'react'
import {TbArrowBigRightLineFilled} from "react-icons/tb"
import './SideItem.css'

const SideItem = ({alias}) => {
    return (
        <>
            <div className='w-full h-[40px] bg-teal-600 rounded-md text-cyan-100 flex flex-row justify-start items-center text-[20px] shadow-sm hover:bg-cyan-100 hover:text-teal-600 cursor-pointer  mb-[40px]'>
                <span className='mx-2'><TbArrowBigRightLineFilled size={15} /></span>
                {alias}
            </div>
        </>
    )
}

export default SideItem