/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import DayWrapper from './DayWrapper';
import ScheduleCard from './ScheduleCard';

export interface ScheduleDayProps {}

const ScheduleDay = (_props: ScheduleDayProps) => {
  const ref = React.useRef<HTMLElement>();

  return (
    <div style={{ width: 1000, height: 500 }}>
      <DayWrapper ref={ref}>
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
      </DayWrapper>
    </div>
  );
};

export default ScheduleDay;
