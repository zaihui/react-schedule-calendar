import React, { useState } from 'react';
import dayjs from 'dayjs';
import cx from 'classnames';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Form, Input, DatePicker, Card, Button, message } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import { ScheduleMonth } from '../src';

import '../assets/bootstrap.less';
import './style.less';

const OperateDate = {
  Sub: 'sub',
  Add: 'add',
}

const DATE_FORMAT = 'YYYY-MM'
const DATE_FULL_FORMAT = 'YYYY-MM-DD'
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm'
const TIME_FORMAT = 'HH:mm'

const Item: React.FC<any> = ({ label, children, isGrey }) => (
  <div className={cx('item', { grey: !isGrey })}>
    <div className="item-label">
      {label}
    </div>
    <div className="item-content">{children}</div>
  </div>
);

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
        content: '你哈皮',
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

const defaultDate = dayjs();

const SelectForm = ({ onChange }) => {
  const [form] = Form.useForm();

  const handleFinish = values => {
    const { time, name } = values;
    if (!time || !name) {
      message.warn('表单项必填');
      return
    }
    const payload = {
      date: time.format(DATE_FULL_FORMAT),
      data: [{
        time: time.format(TIME_FORMAT),
        content: name,
      }],
    }
    onChange(payload);
  }

  return (
    <Card>
       <Form
        layout="inline"
        colon={false}
        form={form}
        onFinish={handleFinish}
        style={{ justifyContent: 'center' }}
      >
        <Form.Item label="课程名称" name="name">
          <Input placeholder="请输入课程名称" />
        </Form.Item>
        <Form.Item label="上课时间" name="time">
          <DatePicker
            placeholder="请输入上课时间"
            showTime
            format={DATE_TIME_FORMAT}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">添加</Button>
        </Form.Item>
      </Form>
    </Card>
  )
};

const Test: React.FC = () => {
  const [data, setData] = useState(defaultData);
  const [date, setDate] = useState(defaultDate);
  const Overlay = ({ item }) => (
    <div className="pop-wrapper">
      <div className="pop-wrapper-time">{dayjs(item.date).date()}</div>
      {item.data.map(v => (
        <Item label={v.time} isGrey={dayjs(item.date)?.isSame(dayjs(date), 'month')}>
          {v.content}
        </Item>
      ))}
    </div>
  );
  const handleChangeDate = (type: string) => {
    if (type === OperateDate.Sub) {
      setDate(dayjs(date).subtract(1, 'month'));
    } else {
      setDate(dayjs(date).add(1, 'month'));
    }
  };
  const handleChangeForm = value => {
    setDate(dayjs(value.date));
    const newData = data;
    const hasData = data.some(d => dayjs(d.date)?.isSame(dayjs(value.date)));
    if (hasData) {
      newData.forEach(d => {
        if (dayjs(d.date)?.isSame(dayjs(value.date))) {
          d.data.push(value.data[0]);
        }
      })
    } else {
      newData.push(value);
    }
    setData([...newData])
  };
  return (
    <div className="schedule-calendar-month">
      <SelectForm onChange={handleChangeForm} />
      <div className="date-title">
        <LeftOutlined
          style={{ cursor: 'pointer' }}
          onClick={() => handleChangeDate(OperateDate.Sub)}
        />
        &nbsp;
        {dayjs(date).format('YYYY年MM月')}&nbsp;
        <RightOutlined
          style={{ cursor: 'pointer' }}
          onClick={() => handleChangeDate(OperateDate.Add)}
        />
      </div>
      <ScheduleMonth.MonthWrapper
        value={date.format(DATE_FORMAT)}
        className="schedule-calendar-month-wrapper"
      >
        {data.map((v, i) => (
          <ScheduleMonth.MonthCard
            key={`${i}`}
            showTooltip
            tooltipProps={{ overlay: <Overlay item={v} />, trigger: ['hover'] }}
            date={v.date}
          >
            <Scrollbars
              className="time-course-card"
              autoHide
              autoHideTimeout={300}
            >
              {v.data.map(l => (
                <Item label={l.time} isGrey={dayjs(v.date)?.isSame(dayjs(date), 'month')}>
                  {l.content}
                </Item>
              ))}
            </Scrollbars>
          </ScheduleMonth.MonthCard>
        ))}
      </ScheduleMonth.MonthWrapper>
  </div>
  )
};
export default Test;
