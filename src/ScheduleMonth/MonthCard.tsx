import * as React from 'react';
import Tooltip from 'rc-tooltip';
import { TooltipProps } from 'rc-tooltip/lib/Tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export interface MonthCardProps {
  date: string
  showTooltip?: boolean;
  tooltipProps?: TooltipProps;
  onClick?(arg: React.MouseEvent): void;
}

const defaultOverlayInnerStyle = {
  padding: '10px 6px',
  backgroundColor: '#fff',
  boxShadow:
    '0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05)',
  borderRadius: 2,
  color: 'black',
};

const MonthCard: React.FC<MonthCardProps> = props => {
  const { onClick, children, tooltipProps = {}, showTooltip = false } = props;
  const ttipProps: TooltipProps = {
    align: {
      offset: [0, -20],
    },
    overlay: null,
    trigger: ['click'],
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    overlayInnerStyle: defaultOverlayInnerStyle,
    transitionName: 'rc-tooltip-zoom',
    ...tooltipProps,
  };
  const child = (
    <div
      onClick={onClick}
      className="month-card"
    >
      <div className="month-card-content">
        {children}
      </div>
    </div>
  );
  if (showTooltip && !!ttipProps.overlay) {
    return <Tooltip {...ttipProps}>{child}</Tooltip>;
  }
  return child;
};

export default MonthCard;
