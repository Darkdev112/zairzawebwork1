import React, { useState } from 'react'
import "./Website.css"
import { useDrop } from 'react-dnd'
import { sidecom } from '../../data/sidecom'
import DropComponent from '../DropComponent/DropComponent'

const Website = () => {
  const [target, setTarget] = useState(sidecom);
  return (
    <div className={`overflow-y-scroll overflow-x-clip max-h-full scrollbar-hide`} >
        {target.map((targetItem) => {
          return  <DropComponent key={targetItem.id} targetItem={targetItem} target={target} setTarget={setTarget}/>
        })}
    </div>
  )
}

export default Website