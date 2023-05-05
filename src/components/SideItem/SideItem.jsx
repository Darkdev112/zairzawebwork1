import React from 'react'
import {TbArrowBigRightLineFilled} from "react-icons/tb"
import './SideItem.css'
import { useDrag } from 'react-dnd'

const SideItem = ({item}) => {
    const [{isDragging}, drag] = useDrag({
        type : "div",
        item : item,
        collect : (monitor) => ({
            isDragging : !!monitor.isDragging(), 
        })
    })
    return (
        <>
            <div className={`w-full h-[40px] bg-teal-600 rounded-md text-cyan-100 flex flex-row justify-start items-center text-[20px] shadow-sm hover:bg-cyan-100 hover:text-teal-600 cursor-pointer  mb-[40px] ${isDragging ? 'border-2 border-lime-500' : ''}`} ref={drag}>
                <span className='mx-2'><TbArrowBigRightLineFilled size={15} /></span>
                {item.alias}
            </div>
        </>
    )
}

export default SideItem