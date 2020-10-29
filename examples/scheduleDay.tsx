import React, { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import moment from 'moment';
import { Spin, Card, Form, Input, Button, DatePicker, Select, message } from 'antd';
import 'antd/dist/antd.css';
import { Scrollbars } from 'react-custom-scrollbars';
import { CalendarFilled, ClockCircleFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';

import { ScheduleDay } from '../src';
import '../assets/bootstrap.less';
import './index.less';

const scrollBarStyle: React.CSSProperties = {
  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 0px 0px -2px, rgba(0, 0, 0, 0.08) 0px 6px 7px 0px, rgba(0, 0, 0, 0.05) 0px 9px 14px -4px',
  width: 900,
  height: 500,
  margin: '24px auto',
}
const Avator = (
  <img
    src="https://s3.cn-north-1.amazonaws.com.cn/media.zaihuiba.com/campaign_pics/c7bf344ddfa34540b2afd43ed0a28151.jpeg"
    style={{ width: 16, height: 16, borderRadius: '50%' }}
    alt=""
  />
);
const delay = () => new Promise(r => setTimeout(() => r(), 500))
const Fields: React.FC<any> = ({ icon, iconStyle, children, onlyIcon }) => (
  <div className="fields" style={onlyIcon ? { justifyContent: 'center' } : {}}>
    <div className="fields-icon" style={{ ...iconStyle }}>
      {icon}
    </div>
    {!onlyIcon && <div className="fields-content">{children}</div>}
  </div>
);

const colors = [
  { color: '#73E1F1', backgroundColor: 'rgba(115, 225, 241, .3)' },
  { color: '#2196F3', backgroundColor: 'rgba(33, 150, 243, .3)' },
  { color: '#DCA9F9', backgroundColor: 'rgba(220, 169, 249, .3)' },
  { color: '#FFC82C', backgroundColor: 'rgba(255, 200, 44, .3)' },
  { color: '#23B098', backgroundColor: 'rgba(35, 176, 152, .3)' },
  { color: '#FF537F', backgroundColor: 'rgba(255, 83, 127, .3)' },
]

const defaultData = [
  {
    title: '顶尖中性浮力-开放水域实践课程',
    startTime: '2020-10-29 13:00',
    endTime: '2020-10-29 17:40',
    coach: 'Cslove',
    member: '瓶子、罐子',
    course: '第三课时',
    address: '闵行区潜水08号场馆',
    color: '#73E1F1',
    backgroundColor: 'rgba(115, 225, 241, .3)',
  },
  {
    title: '顶尖中性浮力-开放水域实践课程',
    startTime: '2020-10-29 12:00',
    endTime: '2020-10-29 15:00',
    coach: 'noon',
    member: '瓶子、罐子',
    course: '第三课时',
    address: '闵行区潜水08号场馆',
    color: '#2196F3',
    backgroundColor: 'rgba(33, 150, 243, .3)',
  },
  {
    title: '顶尖中性浮力-开放水域实践课程',
    startTime: '2020-10-29 14:00',
    endTime: '2020-10-29 18:00',
    coach: 'MOLVIA',
    member: '瓶子、罐子',
    course: '第三课时',
    address: '闵行区潜水08号场馆',
    color: '#DCA9F9',
    backgroundColor: 'rgba(220, 169, 249, .3)',
  },
];
const nextData = [
  {
    title: '顶尖中性浮力-开放水域实践课程',
    startTime: '2020-10-30 10:00',
    endTime: '2020-10-30 14:40',
    coach: 'MOLVIA',
    member: '瓶子、罐子',
    course: '第三课时',
    address: '闵行区潜水08号场馆',
    color: '#FFC82C',
    backgroundColor: 'rgba(255, 200, 44, .3)',
  },
  {
    title: '顶尖中性浮力-开放水域实践课程',
    startTime: '2020-10-30 12:00',
    endTime: '2020-10-30 15:00',
    coach: 'noon',
    member: '瓶子、罐子',
    course: '第三课时',
    address: '闵行区潜水08号场馆',
    color: '#23B098',
    backgroundColor: 'rgba(35, 176, 152, .3)',
  },
  {
    title: '顶尖中性浮力-开放水域实践课程',
    startTime: '2020-10-30 07:00',
    endTime: '2020-10-30 12:00',
    coach: 'Cslove',
    member: '瓶子、罐子',
    course: '第三课时',
    address: '闵行区潜水08号场馆',
    color: '#FF537F',
    backgroundColor: 'rgba(255, 83, 127, .3)',
  },
];

const DateForm = ({ onChange }) => {
  const [form] = Form.useForm();
  const handleFisish = values => {
    const { times, title, color } = values
    if (!times?.length || !title || !color) {
      message.warn('表单项必填')
      return
    }
    const payload = {
      title: values.title,
      color: values.color,
      backgroundColor: colors.find(v => v.color === values.color)?.backgroundColor,
      startTime: values.times[0]?.format('YYYY-MM-DD HH:mm'),
      endTime: values.times[1]?.format('YYYY-MM-DD HH:mm'),
    }
    onChange(payload)
  }
  return (
    <Card>
      <Form
        layout="inline"
        form={form}
        onFinish={handleFisish}
        style={{ justifyContent: 'center' }}
      >
        <Form.Item name="title" label="课程名称">
          <Input placeholder="请输入课程名称" />
        </Form.Item>
        <Form.Item name="times" label="上课时间">
          <DatePicker.RangePicker
            showTime={{
              hideDisabledOptions: true,
              defaultValue: [moment('00:00', 'HH:mm'), moment('11:59:59', 'HH:mm')],
            }}
            format="YYYY-MM-DD HH:mm"
          />
        </Form.Item>
        <Form.Item name="color" label="请选择颜色">
          <Select placeholder="请选择颜色" style={{ width: 150 }}>
            {colors.map(v => (
              <Select.Option value={v.color} key={v.color}>
                <div className="select-option" style={{ backgroundColor: v.color }} />
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

const Test: React.FC = () => {
  const [data, setData] = useState(defaultData);
  const [date, setDate] = useState(dayjs())
  const [loading, setLoading] = useState(false)
  const scrollToRef = useRef<any>()
  const scrollBarRef = useRef<any>()
  useEffect(() => {
    setDate(dayjs(data[0].startTime))
  }, [data])

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

  const handleClickArrow = async action => {
    scrollToRef.current = null
    setLoading(true)
    await delay()
    if (action) {
      setData(nextData)
    } else { setData(defaultData) }
    setLoading(false)
  }
  const handleChangeForm = async values => {
    setLoading(true)
    await delay()
    const newDate = { ...defaultData[0], ...values }
    scrollToRef.current = newDate
    setData(state => [...state, newDate])
    setLoading(false)
  }
  return (
    <>
      <DateForm
        onChange={handleChangeForm}
      />
      <div className="date-title">
        <LeftOutlined
          style={{ cursor: 'pointer' }}
          onClick={() => handleClickArrow(0)}
        />
        &nbsp;
        {date.format('YYYY年MM月DD日')}&nbsp;
        <RightOutlined
          style={{ cursor: 'pointer' }}
          onClick={() => handleClickArrow(1)}
        />
      </div>
      <Spin spinning={loading}>
        <div style={{ ...scrollBarStyle }}>
          <ScheduleDay.TimeLine scrollTo={scrollToRef.current?.startTime}>
            {data.map((v, i) => (
              <ScheduleDay.ScheduleCard
                key={`${i}`}
                showTooltip
                startTime={v.startTime}
                endTime={v.endTime}
                tooltipProps={{ overlay: <Overlay item={v} />, trigger: ['hover'] }}
              >
                <Scrollbars
                  className="time-course-card"
                  ref={scrollBarRef}
                  autoHide
                  autoHideTimeout={300}
                  style={{ borderColor: v.color, backgroundColor: v.backgroundColor }}
                >
                  <div style={{ padding: '12px 4px' }}>
                    <Fields
                      icon={<CalendarFilled />}
                      iconStyle={{ color: v.color }}
                      onlyIcon={scrollBarRef.current?.container?.offsetWidth <= 50}
                    >
                      {v.title}
                    </Fields>
                    <Fields
                      icon={<ClockCircleFilled />}
                      iconStyle={{ color: v.color }}
                      onlyIcon={scrollBarRef.current?.container?.offsetWidth <= 50}
                    >
                      {dayjs(v.startTime).format('HH:mm')}-{dayjs(v.endTime).format('HH:mm')}
                    </Fields>
                    <Fields
                      icon={Avator}
                      onlyIcon={scrollBarRef.current?.container?.offsetWidth <= 50}
                    >{v.coach}
                    </Fields>
                  </div>
                </Scrollbars>
              </ScheduleDay.ScheduleCard>
            ))}
          </ScheduleDay.TimeLine>
        </div>
      </Spin>
    </>
  );
};
export default Test;
