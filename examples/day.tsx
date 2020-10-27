import React from 'react';
import { FormOutlined } from '@ant-design/icons';

import { ScheduleDay } from '../src';
import '../assets/bootstrap.less';
import './index.less';

const Test: React.FC = () => (
  <div className="schedule-calendar">
    <ScheduleDay.TimeLine>
      <ScheduleDay.ScheduleCard showTooltip startTime="2020-12-12 12:00" endTime="2020-12-12 16:40">
        {({ borderColor }) => (
          <div style={{ color: borderColor }}>
            <FormOutlined /> 家附近的时刻附近开始附近的卡
          </div>
        )}
      </ScheduleDay.ScheduleCard>
    </ScheduleDay.TimeLine>
  </div>
);
export default Test;
