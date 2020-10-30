import React from 'react';

import { ScheduleDay } from '../src';
import './index.less';

const { ScheduleCard, TimeLine } = ScheduleDay
const Test: React.FC = () => (
  <div className="schedule-week">
    <TimeLine>
      <ScheduleCard
        showTooltip
        startTime="2020-10-30 17:00"
        endTime="2020-10-30 19:40"
        tooltipProps={{
          overlay: '17:00 - 19:40',
          trigger: ['hover'],
        }}
      >
        <div style={{ width: '100%', height: '100%', backgroundColor: 'pink' }}>
          hello world
        </div>
      </ScheduleCard>
    </TimeLine>
  </div>
);

export default Test;
