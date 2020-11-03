import React, { useState } from 'react';
import dayjs from 'dayjs';
import cx from 'classnames';

import { WeekText } from '../utils/constants';

export interface WeekHeaderProps {
  onClick?(arg, e);
}

const WeekHeader: React.FC<WeekHeaderProps> = ({ onClick }) => {
  const [checkedIndex, setCheckedIndex] = useState(dayjs().day());
  const weeks = WeekText.map((v, i) => ({ week: v.labelCn, day: dayjs().day(i) }));
  const handleDate = (index, e) => {
    if (index === checkedIndex) return;
    setCheckedIndex(index);
    if (onClick) {
      const item = weeks.find((_, i) => i === index);
      onClick(item.day.format('YYYY-MM-DD'), e);
    }
  };
  return (
    <div className="week-header">
      {weeks.map((v, i) => (
        <div
          key={`${i}`}
          onClick={e => handleDate(i, e)}
          className={cx('week-box', { 'checked-day': i === checkedIndex })}
        >
          <div className="week">{v.week}</div>
          <div className="day">{v.day.date()}</div>
        </div>
      ))}
    </div>
  );
};

export default WeekHeader;
