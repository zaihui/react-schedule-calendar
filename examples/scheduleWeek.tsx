import React from 'react';

import { ScheduleWeek } from '../src';
import './index.less';

export interface WeekTimeLineProps {}
const WeekTimeLine: React.FC<WeekTimeLineProps> = () => (
  <div className="schedule-week">
    <ScheduleWeek.WeekTimeLine />
  </div>
);

export default WeekTimeLine;
