import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Form, Input, DatePicker } from 'antd';
import { ScheduleMonth } from '../src';

import '../assets/bootstrap.less';
import './style.less';

const OperateDate = {
  Sub: 'sub',
  Add: 'add',
}

const DATE_FORMAT = 'YYYY-MM'

const Item: React.FC<any> = ({ label, children }) => (
  <div className="item">
    <div className="item-label">
      {label}
    </div>
    <div className="item-content">{children}</div>
  </div>
);

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const defaultData = [
  {
    date: '2020-9-30',
    data: [
      {
        time: '10:00',
        content: '咿呀咿呀哟',
      },
      {
        time: '10:30',
        content: '你哈皮2',
      },
      {
        time: '11:00',
        content: '你哈皮3',
      },
    ],
  },
  {
    date: '2020-10-10',
    data: [
      {
        time: '10:00',
        content: '你哈皮1111hdushuh11111',
      },
      {
        time: '10:30',
        content: '你哈皮2',
      },
      {
        time: '11:00',
        content: '你哈皮3',
      },
    ],
  },
  {
    date: '2020-10-20',
    data: [
      {
        time: '10:00',
        content: '你哈皮1',
      },
      {
        time: '10:20',
        content: '你哈皮2',
      },
      {
        time: '11:00',
        content: '你哈皮3',
      },
      {
        time: '10:00',
        content: '你哈皮1',
      },
      {
        time: '10:20',
        content: '你哈皮2',
      },
      {
        time: '11:00',
        content: '你哈皮3',
      },
    ],
  },
  {
    date: '2020-09-20',
    data: [
      {
        time: '10:00',
        content: '你哈皮1',
      },
      {
        time: '10:20',
        content: '你哈皮2',
      },
      {
        time: '11:00',
        content: '你哈皮3',
      },
    ],
  },
];

const defaultDate = dayjs().format(DATE_FORMAT)

const Test: React.FC = () => {
  const [data] = useState(defaultData);
  const [date, setDate] = useState(defaultDate)
  const Overlay = ({ item }) => (
    <div className="pop-wrapper">
      <div className="pop-wrapper-time">{dayjs(item.date).date()}</div>
      {item.data.map(v => (
        <Item label={v.time}>
          {v.content}
        </Item>
      ))}
    </div>
  );
  const changeDate = (type: string) => {
    if (type === OperateDate.Sub) {
      setDate(dayjs(date).subtract(1, 'month').format(DATE_FORMAT))
    } else {
      setDate(dayjs(date).add(1, 'month').format(DATE_FORMAT))
    }
  }
  return (
    <div className="schedule-calendar-month">
      <Form {...layout} name="basic">
        <Form.Item label="课程名称">
          <Input />
        </Form.Item>
        <Form.Item label="课程时间">
          <DatePicker showTime />
        </Form.Item>
      </Form>
      <div className="date-title">
        <LeftOutlined
          style={{ cursor: 'pointer' }}
          onClick={() => changeDate(OperateDate.Sub)}
        />
        &nbsp;
        {dayjs(date).format('YYYY年MM月')}&nbsp;
        <RightOutlined
          style={{ cursor: 'pointer' }}
          onClick={() => changeDate(OperateDate.Add)}
        />
      </div>
      <ScheduleMonth.MonthWrapper value={date}>
        {data.map((v, i) => (
          <ScheduleMonth.MonthCard
            key={`${i}`}
            showTooltip
            tooltipProps={{ overlay: <Overlay item={v} />, trigger: ['hover'] }}
            date={v.date}
          >
          {v.data.map(l => (
            <Item label={l.time}>
              {l.content}
            </Item>
          ))}
          </ScheduleMonth.MonthCard>
        ))}
      </ScheduleMonth.MonthWrapper>
  </div>
  )
};
export default Test;
