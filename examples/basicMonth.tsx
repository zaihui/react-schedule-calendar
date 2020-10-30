import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { ScheduleMonth } from '../src';

import '../assets/bootstrap.less';

const DATE_FORMAT = 'YYYY-MM';
const DATE_FORMAT_CN = 'YYYY年MM月';

const OperateDate = {
  Sub: 'sub',
  Add: 'add',
};

const Test: React.FC = () => {
  const [date, setDate] = useState(dayjs());
  const handleChangeDate = (type: string) => {
    if (type === OperateDate.Sub) {
      setDate(dayjs(date).subtract(1, 'month'));
    } else {
      setDate(dayjs(date).add(1, 'month'));
    }
  };
  return (
    <div className="schedule-calendar-month">
      <div className="date-title">
        <LeftOutlined
          style={{ cursor: 'pointer' }}
          onClick={() => handleChangeDate(OperateDate.Sub)}
        />
        &nbsp;
        {dayjs(date).format(DATE_FORMAT_CN)}&nbsp;
        <RightOutlined
          style={{ cursor: 'pointer' }}
          onClick={() => handleChangeDate(OperateDate.Add)}
        />
      </div>
      <ScheduleMonth.MonthWrapper
        value={date.format(DATE_FORMAT)}
        className="schedule-calendar-month-wrapper"
      />
    </div>
  )
}
export default Test;
