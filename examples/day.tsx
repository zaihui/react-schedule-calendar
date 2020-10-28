import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Scrollbars } from 'react-custom-scrollbars';
import { CalendarFilled, ClockCircleFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';

import { ScheduleDay } from '../src';
import '../assets/bootstrap.less';
import './index.less';

const Avator = (
  <img
    src="https://s3.cn-north-1.amazonaws.com.cn/media.zaihuiba.com/campaign_pics/c7bf344ddfa34540b2afd43ed0a28151.jpeg"
    style={{ width: 16, height: 16, borderRadius: '50%' }}
    alt=""
  />
);
const Fields: React.FC<any> = ({ icon, iconStyle, children }) => (
  <div className="fields">
    <div className="fields-icon" style={{ ...iconStyle }}>
      {icon}
    </div>
    <div className="fields-content">{children}</div>
  </div>
);

const defaultData = [
  {
    title: '顶尖中性浮力-开放水域实践课程',
    startTime: '2020-08-19 13:00',
    endTime: '2020-08-19 16:00',
    coach: 'Cslove',
    member: '瓶子、罐子',
    course: '第三课时',
    address: '闵行区潜水08号场馆',
    color: '#73E1F1',
    backgroundColor: 'rgba(115, 225, 241, .3)',
  },
];

const Test: React.FC = () => {
  const [data] = useState(defaultData);
  const Overlay = ({ item }) => (
    <div className="overlay">
      <div className="overlay-title">{item.title}</div>
      <div className="overlay-time">
        上课时间: {dayjs(item.startTime).format('YYYY-MM-DD')}{' '}
        {dayjs(item.startTime).format('HH:mm')}-{dayjs(item.endTime).format('HH:mm')}
      </div>
      <Fields icon="上课教练：" iconStyle={{ width: 70 }}>
        {item.coach}
      </Fields>
      <Fields icon="上课学员：" iconStyle={{ width: 70 }}>
        {item.member}
      </Fields>
      <Fields icon="课时：" iconStyle={{ width: 70 }}>
        {item.course}
      </Fields>
      <Fields icon="上课地点：" iconStyle={{ width: 70 }}>
        {item.address}
      </Fields>
    </div>
  );
  return (
    <>
      <div className="date-title">
        <LeftOutlined style={{ cursor: 'pointer' }} />
        &nbsp;
        {dayjs(data[0].startTime).format('YYYY年MM月DD日')}&nbsp;
        <RightOutlined style={{ cursor: 'pointer' }} />
      </div>
      <Scrollbars
        autoHide
        autoHideTimeout={300}
        style={{ width: 800, height: 400, margin: '24px auto' }}
      >
        <ScheduleDay.TimeLine>
          {data.map((v, i) => (
            <ScheduleDay.ScheduleCard
              key={`${i}`}
              showTooltip
              startTime={v.startTime}
              endTime={v.endTime}
              tooltipProps={{ overlay: <Overlay item={v} />, trigger: ['hover'] }}
            >
              <Scrollbars autoHide autoHideTimeout={300} style={{ width: '100%', height: '100%' }}>
                <div
                  className="time-course-card"
                  style={{ borderColor: v.color, backgroundColor: v.backgroundColor }}
                >
                  <Fields icon={<CalendarFilled />} iconStyle={{ color: v.color }}>
                    {v.title}
                  </Fields>
                  <Fields icon={<ClockCircleFilled />} iconStyle={{ color: v.color }}>
                    {dayjs(v.startTime).format('HH:mm')}-{dayjs(v.endTime).format('HH:mm')}
                  </Fields>
                  <Fields icon={Avator}>{v.coach}</Fields>
                </div>
              </Scrollbars>
            </ScheduleDay.ScheduleCard>
          ))}
        </ScheduleDay.TimeLine>
      </Scrollbars>
    </>
  );
};
export default Test;
