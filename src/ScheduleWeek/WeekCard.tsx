import * as React from 'react';
import dayjs from 'dayjs';

export interface WeekCardProps {
  prefix?: string;
  date: string;
  style?: React.CSSProperties;
}

const WeekCard: React.FC<WeekCardProps> = props => {
  const { prefix = 'week-time-line', date, style, children } = props;
  const leftFactor = dayjs(date).day();
  return (
    <div
      className={`${prefix}-card`}
      style={{ left: `calc((100% / 7) * ${leftFactor})`, ...style }}
    >
      {children}
    </div>
  );
};

export default WeekCard;
