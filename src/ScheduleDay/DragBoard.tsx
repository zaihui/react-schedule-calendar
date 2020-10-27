import * as React from 'react';
import { useDrop } from 'react-dnd'

import { DragItem } from '../constants'

export interface DragBoardProps {
  prefix: string
}

const DragBoard: React.FC<DragBoardProps> = props => {
  const {
    children,
    prefix,
  } = props
  const [_, drop] = useDrop({
    accept: DragItem.TimeCard,
    drop: (item, monitor) => {
      console.log(monitor.getClientOffset(), monitor.getSourceClientOffset())
    },
  })

  return (
    <div className={`${prefix}-content`} ref={drop}>
      {children}
    </div>
  )
};

export default DragBoard;
