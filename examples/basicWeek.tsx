import React from 'react';

import { ScheduleWeek, ScheduleDay } from '../src';
import './index.less';

const { WeekTimeLine, WeekCard } = ScheduleWeek;
const { ScheduleCard } = ScheduleDay
const Test: React.FC = () => (
  <div className="schedule-week">
    <WeekTimeLine>
      <WeekCard
        date="2020-10-28"
      >
        <ScheduleCard
          showTooltip
          startTime="2020-10-28 21:00"
          endTime="2020-10-28 23:00"
          style={{ width: '100%' }}
          tooltipProps={{ overlay: '新的征程', trigger: ['hover'] }}
        >
          <div style={{ width: '100%', height: '100%', backgroundColor: 'yellow' }}>新的征程1</div>
        </ScheduleCard>
      </WeekCard>
    </WeekTimeLine>
  </div>
);

export default Test;
