import React, { useState } from 'react';
import { Radio } from 'antd';
import BasicMonth from './basicMonth';
import BasicWeek from './basicWeek';
import BasicDay from './basicDay';

import '../assets/bootstrap.less';
import './basic.less'

const Test: React.FC = () => {
  const [type, setType] = useState('day');

  const handleCalendarType = e => {
    setType(e.target.value);
  };

  const renderCalendar = () => {
    switch (type) {
      case 'day':
        return <BasicDay />
      case 'week':
        return <BasicWeek />
      case 'month':
        return <BasicMonth />
      default:
        return null
    }
  }
  return (
    <div className="schedule-calendar-basic">
      <Radio.Group value={type} onChange={handleCalendarType} className="schedule-calendar-basic-radio">
        <Radio.Button value="day">日</Radio.Button>
        <Radio.Button value="week">周</Radio.Button>
        <Radio.Button value="month">月</Radio.Button>
      </Radio.Group>
      {renderCalendar()}
    </div>
  )
}
export default Test;
