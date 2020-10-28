/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';

import MonthWrapper from './MonthWrapper';

export interface ScheduleMonthProps {}

const ScheduleDay = (_props: ScheduleMonthProps) => {
  const ref = React.useRef<HTMLElement>();

  return (
    <div style={{ width: 1000, height: 500 }}>
      <MonthWrapper ref={ref} value="2020-06" />
    </div>
  );
};

export default ScheduleDay;
