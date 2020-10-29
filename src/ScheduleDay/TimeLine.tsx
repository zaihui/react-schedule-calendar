import * as React from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { Scrollbars } from 'react-custom-scrollbars';
import ScheduleCard from './ScheduleCard';

import { getNumsArray, transformTimeToHeight } from '../utils';

export interface TimeLineProps {
  prefix?: string;
  className?: string;
  scrollTo?: string;
  showTime?: boolean;
  style?: React.CSSProperties;
  children: React.ReactElement | React.ReactElement[];
}

const hours = getNumsArray(25).map(n => `${n}:00`);
const TimeLine: React.ForwardRefRenderFunction<any, TimeLineProps> = props => {
  const {
    prefix = 'day-wrapper',
    className: clsName,
    showTime = 'true',
    children,
    scrollTo,
  } = props;
  const className = cx(clsName, prefix, { [`${prefix}-not-show-time`]: !showTime });
  const wrapperRef = React.useRef<any>();
  React.useEffect(() => {
    const allTime = [];
    let top = 0;
    if (scrollTo) {
      top = transformTimeToHeight(scrollTo);
    } else if (children) {
      const childs = React.Children.toArray(children);
      if (childs.some((v: any) => v.type !== ScheduleCard)) return;

      React.Children.forEach(children, (c: React.ReactElement) => allTime.push(c.props.startTime));
      const earlistTime = allTime.reduce((cur, nex) => {
        if (dayjs(cur).isBefore(dayjs(nex))) {
          return cur;
        }
        return nex;
      });
      top = transformTimeToHeight(earlistTime);
    }
    wrapperRef.current.scrollTop(top);
  }, [children, scrollTo]);

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={300}
      ref={wrapperRef}
      style={{ width: '100%', height: '100%' }}
    >
      <div className={className}>
        {hours.map((v, i) => (
          <div key={`${i}`} className={`${prefix}-area`}>
            {showTime && <span className={`${prefix}-area-time`}>{v}</span>}
          </div>
        ))}
        <section className={`${prefix}-content`}>{children}</section>
      </div>
    </Scrollbars>
  );
};

export default TimeLine;
