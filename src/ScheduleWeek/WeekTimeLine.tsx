import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs'

import WeekHeader from './WeekHeader';
import { TimeLine, ScheduleCard } from '../ScheduleDay';
import WeekCard from './WeekCard'

export interface WeekTimeLineProps {
  prefix?: string
  scrollTo?: string
  children: any;
}
const weekArray = Array(7).fill(0)
const WeekTimeLine: React.FC<WeekTimeLineProps> = props => {
  const {
    prefix = 'week-time-line',
    scrollTo,
    children,
  } = props
  const [scrollTop, setScrollTop] = useState<string>()
  useEffect(() => {
    const allTime = [];
    if (scrollTo) {
      setScrollTop(scrollTo)
    } else if (children) {
      const childs = React.Children.toArray(children);
      if (childs.some((v: any) => v.type !== WeekCard)) return;

      const traveseChildren = child => {
        React.Children.forEach(child, (c: React.ReactElement) => {
          if (c.type === ScheduleCard) {
            allTime.push(c.props.startTime)
            return
          }
          traveseChildren(c.props.children)
        })
      }
      traveseChildren(children)
      const earlistTime = allTime.reduce((cur, nex) => {
        if (dayjs(cur).isBefore(dayjs(nex))) {
          return cur;
        }
        return nex;
      });
      if (earlistTime) {
        setScrollTop(earlistTime)
      }
    }
  }, [children, scrollTo])
  return (
    <div className={prefix}>
      <WeekHeader />
      <TimeLine scrollTo={scrollTop}>
        <div className={`${prefix}-wrapper`}>
          {weekArray.map((_, i) => (<div key={i} className={`${prefix}-wrapper-border`} />))}
          {children}
        </div>
      </TimeLine>
    </div>
  )
};

export default WeekTimeLine;
