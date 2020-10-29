import React from 'react';

import WeekHeader from './WeekHeader';
import { TimeLine } from '../ScheduleDay';
import WeekCard from './WeekCard';

export interface WeekTimeLineProps {}
const WeekTimeLine: React.FC<WeekTimeLineProps> = () => (
  // const [] = useState()
  <div className="week-time-line">
    <WeekHeader />
    <TimeLine>
      <div className="week-time-line-wrapper">
        <div className="week-card-wrapper" style={{ left: 'calc(14.3% * 3)' }}>
          <WeekCard
            showTooltip
            startTime="2020-12-12 09:00"
            endTime="2020-12-12 17:00"
            tooltipProps={{ overlay: 'hello', trigger: ['hover'] }}
          >
            <div
              style={{ width: '100%', height: '100%', backgroundColor: 'rgba(115, 225, 241, .3)' }}
            >
              hahaha
            </div>
          </WeekCard>
          <WeekCard
            showTooltip
            startTime="2020-12-12 09:00"
            endTime="2020-12-12 12:00"
            tooltipProps={{ overlay: 'hello', trigger: ['hover'] }}
          >
            <div
              style={{ width: '100%', height: '100%', backgroundColor: 'rgba(33, 150, 243, .3)' }}
            >
              hahaha
            </div>
          </WeekCard>
          <WeekCard
            showTooltip
            startTime="2020-12-12 09:00"
            endTime="2020-12-12 12:00"
            tooltipProps={{ overlay: 'hello', trigger: ['hover'] }}
          >
            <div
              style={{ width: '100%', height: '100%', backgroundColor: 'rgba(220, 169, 249, .3)' }}
            >
              hahaha
            </div>
          </WeekCard>
          <WeekCard
            showTooltip
            startTime="2020-12-12 21:00"
            endTime="2020-12-12 22:00"
            tooltipProps={{ overlay: 'hello', trigger: ['hover'] }}
          >
            <div
              style={{ width: '100%', height: '100%', backgroundColor: 'rgba(115, 225, 241, .3)' }}
            >
              hahaha
            </div>
          </WeekCard>
        </div>
      </div>
    </TimeLine>
  </div>
);

export default WeekTimeLine;
