/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import DayWrapper from './DayWrapper';
import ScheduleCard from './ScheduleCard';

export interface ScheduleDayProps {}

const ScheduleDay = (_props: ScheduleDayProps) => (
  <div>
    <DayWrapper>
      <ScheduleCard startTime="2020-12-12 11:00" endTime="2020-12-12 16:20">
        <div>hello</div>
        <div>hi</div>
        <div>ho</div>
        <div>haha</div>
      </ScheduleCard>
      <ScheduleCard startTime="2020-12-12 13:00" endTime="2020-12-12 13:20">
        <div>hello</div>
        <div>hi</div>
        <div>ho</div>
        <div>haha</div>
      </ScheduleCard>
      <ScheduleCard startTime="2020-12-12 09:00" endTime="2020-12-12 17:20">
        <div>hello</div>
        <div>hi</div>
        <div>ho</div>
        <div>haha</div>
      </ScheduleCard>
      <ScheduleCard startTime="2020-12-12 07:00" endTime="2020-12-12 18:20">
        <div>hello</div>
        <div>hi</div>
        <div>ho</div>
        <div>haha</div>
      </ScheduleCard>
    </DayWrapper>
  </div>
);

export default ScheduleDay;
