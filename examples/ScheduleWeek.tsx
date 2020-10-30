import React from 'react';
import { GithubOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import { ScheduleWeek, ScheduleDay } from '../src';
import { colors } from './scheduleDay';
import './index.less';

const DATE_DAY_FORMAT_CN = 'YYYY年MM月DD日';

const { WeekTimeLine, WeekCard } = ScheduleWeek;
const { ScheduleCard } = ScheduleDay;
const Test: React.FC = () => (
  <div className="schedule-week">
    <div className="date-title">
      <LeftOutlined style={{ cursor: 'pointer' }} />
      &nbsp;
      {`${dayjs()
        .startOf('week')
        .format(DATE_DAY_FORMAT_CN)} ～ ${dayjs()
        .endOf('week')
        .format(DATE_DAY_FORMAT_CN)}`}
      &nbsp;
      <RightOutlined style={{ cursor: 'pointer' }} />
    </div>
    <WeekTimeLine>
      <WeekCard date="2020-10-28">
        {colors.map((v, i) => (
          <ScheduleCard
            key={`${i}`}
            showTooltip
            startTime={`2020-10-28 ${i + 5}:00`}
            endTime={`2020-10-28 1${i + 2}:00`}
            style={{ width: '100%', minWidth: 15 }}
            tooltipProps={{ overlay: `${i + 5}:00 - 1${i + 2}:00`, trigger: ['hover'] }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: v.backgroundColor,
                padding: '14px 3px',
              }}
            >
              <GithubOutlined style={{ color: v.color }} />
            </div>
          </ScheduleCard>
        ))}
      </WeekCard>
      <WeekCard date="2020-10-26">
        <ScheduleCard
          showTooltip
          startTime="2020-10-28 12:00"
          endTime="2020-10-28 16:35"
          style={{ width: '100%' }}
          tooltipProps={{ overlay: '12:00 - 16:35', trigger: ['hover'] }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: colors[1].backgroundColor,
              padding: '14px 8px',
            }}
          >
            <GithubOutlined style={{ color: colors[1].color }} />
          </div>
        </ScheduleCard>
      </WeekCard>
      <WeekCard date="2020-10-30">
        <ScheduleCard
          showTooltip
          startTime="2020-10-28 09:00"
          endTime="2020-10-28 13:35"
          style={{ width: '100%' }}
          tooltipProps={{ overlay: '12:00 - 16:35', trigger: ['hover'] }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: colors[0].backgroundColor,
              padding: '14px 8px',
            }}
          >
            <GithubOutlined style={{ color: colors[0].color }} />
          </div>
        </ScheduleCard>
        <ScheduleCard
          showTooltip
          startTime="2020-10-28 12:00"
          endTime="2020-10-28 17:35"
          style={{ width: '100%' }}
          tooltipProps={{ overlay: '12:00 - 16:35', trigger: ['hover'] }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: colors[4].backgroundColor,
              padding: '14px 8px',
            }}
          >
            <GithubOutlined style={{ color: colors[4].color }} />
          </div>
        </ScheduleCard>
      </WeekCard>
    </WeekTimeLine>
  </div>
);

export default Test;
