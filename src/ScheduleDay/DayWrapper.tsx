import * as React from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';

import { getNumsArray, transformTimeToHeight } from '../utils';

export interface DayWrapperProps {
  prefix?: string;
  className?: string;
  children: React.ReactElement | React.ReactElement[];
}

const hours = getNumsArray(25).map(n => `${n}:00`);
const DayWrapper: React.ForwardRefRenderFunction<any, DayWrapperProps> = (props, ref) => {
  const { prefix = 'day-wrapper', className: clsName, children } = props;
  const className = cx(clsName, prefix);
  const wrapperRef = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    const allTime = [];
    React.Children.forEach(children, (c: React.ReactElement) => allTime.push(c.props.startTime));
    const earlistTime = allTime.reduce((cur, nex) => {
      if (dayjs(cur).isBefore(dayjs(nex))) {
        return cur;
      }
      return nex;
    });
    const top = transformTimeToHeight(earlistTime);
    wrapperRef.current.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return (
    <div className={className} ref={wrapperRef}>
      {hours.map((v, i) => (
        <div key={`${i}`} className={`${prefix}-area`}>
          <span className={`${prefix}-area-time`}>{v}</span>
        </div>
      ))}
      <div className={`${prefix}-content`} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default React.forwardRef(DayWrapper);
