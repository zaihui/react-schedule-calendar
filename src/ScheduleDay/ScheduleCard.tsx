import * as React from 'react';
import { useDrag, useDrop } from 'react-dnd'
import Tooltip from 'rc-tooltip';
import { TooltipProps } from 'rc-tooltip/lib/Tooltip';
import 'rc-tooltip/assets/bootstrap.css';

import { transformTimeToRect } from '../utils';
import { DragItem } from '../constants'

export interface ScheduleCardProps {
  startTime: string;
  endTime: string;
  showTooltip?: boolean;
  tooltipProps?: TooltipProps;
  onClick?(arg: React.MouseEvent): void;
}

const defaultOverlayInnerStyle = {
  backgroundColor: '#fff',
  boxShadow:
    '0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05)',
  borderRadius: 2,
  color: 'black',
};

const ScheduleCard: React.FC<ScheduleCardProps> = props => {
  const { children, startTime, endTime, tooltipProps = {}, showTooltip = false, onClick } = props;
  const rect = transformTimeToRect(startTime, endTime);
  const ttipProps: TooltipProps = {
    overlay: null,
    trigger: ['click'],
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    overlayInnerStyle: defaultOverlayInnerStyle,
    transitionName: 'rc-tooltip-zoom',
    ...tooltipProps,
  };

  const [_, drop] = useDrop({
    accept: DragItem.TimeCard,
  })
  const [dragObj, drag] = useDrag({
    item: { type: DragItem.TimeCard, startTime, endTime },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
      getSourceClientOffset: monitor.getSourceClientOffset(),
      getDifferenceFromInitialOffset: monitor.getDifferenceFromInitialOffset(),
      getClientOffset: monitor.getClientOffset(),
      getInitialClientOffset: monitor.getInitialClientOffset(),
      getInitialSourceClientOffset: monitor.getInitialSourceClientOffset(),
    }),
  })
  console.log(dragObj)
  const child = (
    <div ref={drop}>
      <div
        onClick={onClick}
        className="schedule-card"
        style={{ height: rect.height, marginTop: rect.top }}
        ref={drag}
      >
        {children}
      </div>
    </div>
  );
  if (showTooltip && !!ttipProps.overlay) {
    return <Tooltip {...ttipProps}>{child}</Tooltip>;
  }
  return child;
};

export default ScheduleCard;
