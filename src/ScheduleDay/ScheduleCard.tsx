import * as React from 'react';
import Tooltip from 'rc-tooltip';
import { TooltipProps } from 'rc-tooltip/lib/Tooltip';
import 'rc-tooltip/assets/bootstrap.css';

import { transformTimeToRect } from '../utils';

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

  const style = {
    height: rect.height,
    marginTop: rect.top,
  };

  const child = (
    <div onClick={onClick} className="schedule-card" style={{ ...style }}>
      {children}
    </div>
  );
  if (showTooltip && !!ttipProps.overlay) {
    return <Tooltip {...ttipProps}>{child}</Tooltip>;
  }
  return child;
};

export default ScheduleCard;
