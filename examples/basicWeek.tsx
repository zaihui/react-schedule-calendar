import React from 'react';
import dayjs from 'dayjs';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { ScheduleWeek, ScheduleDay } from '../src';
import './index.less';
import './basic.less';

const DATE_DAY_FORMAT_CN = 'YYYY年MM月DD日';

const { WeekTimeLine, WeekCard } = ScheduleWeek;
const { ScheduleCard } = ScheduleDay
const Test: React.FC = () => (
  <div className="schedule-week">
    <div className="date-title">
      <LeftOutlined
        style={{ cursor: 'pointer' }}
      />
      &nbsp;
      {`${dayjs().startOf('week').format(DATE_DAY_FORMAT_CN)} ～ ${dayjs().endOf('week').format(DATE_DAY_FORMAT_CN)}`}&nbsp;
      <RightOutlined
        style={{ cursor: 'pointer' }}
      />
    </div>
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
          <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(115, 225, 241, .2)' }}>新的征程</div>
        </ScheduleCard>
      </WeekCard>
    </WeekTimeLine>
  </div>
);

export default Test;
