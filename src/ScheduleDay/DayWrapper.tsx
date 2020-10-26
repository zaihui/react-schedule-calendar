import * as React from 'react';
import cx from 'classnames';

import { getNumsArray } from '../utils';

export interface DayWrapperProps {
  prefix?: string;
  className?: string;
  children: React.ReactChild;
}

const hours = getNumsArray(25).map(n => `${n}:00`);
const DayWrapper: React.ForwardRefRenderFunction<any, DayWrapperProps> = (props, ref) => {
  const { prefix = 'day-wrapper', className: clsName, children } = props;
  const className = cx(clsName, prefix);
  return (
    <div className={className} ref={ref}>
      {hours.map(v => (
        <div key={v} className={`${prefix}-area`}>
          <span className={`${prefix}-area-time`}>{v}</span>
        </div>
      ))}
      <div className={`${prefix}-content`}>{children}</div>
    </div>
  );
};

export default React.forwardRef(DayWrapper);
