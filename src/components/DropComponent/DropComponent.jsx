import React from 'react'
import { useDrop } from 'react-dnd'

const DropComponent = ({targetItem, target, setTarget}) => {
    
    const handleDrop = (item) => {
        // console.log(item);
        // console.log(targetItem);
        if(item.id===targetItem.id)
        {
            const newTarget = target.map((obj)=> {
                if(obj.id!=targetItem.id)
                {
                    return obj
                }
                return {...obj, hasDrop : true} 
            })
            console.log(newTarget);
            setTarget(newTarget)
        }
    }

    const [{ isOver}, drop] = useDrop({
        accept : "div",
        drop: (item) => handleDrop(item),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })
  return (
    <div ref={drop} className='m-5'>
        {targetItem.hasDrop? targetItem.bodyContent : targetItem.defaultContent}
    </div>
  )
}

export default DropComponent