/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import TimeLine from './TimeLine';
import ScheduleCard from './ScheduleCard';

export interface ScheduleDayProps {}

const ScheduleDay = (_props: ScheduleDayProps) => (
    <TimeLine>
      <ScheduleCard
        showTooltip
        startTime="2020-12-12 14:00"
        endTime="2020-12-12 22:20"
        tooltipProps={{
          trigger: ['hover'],
          overlay: <span>hello</span>,
        }}
      >
        <div>hello</div>
        <div>hi</div>
        <div>ho</div>
        <div>haha</div>
      </ScheduleCard>
    </TimeLine>
  );

export default ScheduleDay;
