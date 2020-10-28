import * as React from 'react';
import 'rc-tooltip/assets/bootstrap.css';
import dayjs from 'dayjs';
import cx from 'classnames';

export interface MonthCardProps {
  value: {
    label: string
    isShow: boolean
    date: string
  }
  onClick?(arg: React.MouseEvent): void;
}

const MonthCard: React.FC<MonthCardProps> = props => {
  const { value, onClick } = props;
  const child = (
    <div
      onClick={onClick}
      className="month-card"
    >
      <div className={cx('month-card-content', { show: value.isShow })}>
        <div className={cx('month-card-content-day', {
          selected: dayjs().isSame(value.date, 'day'),
          special: value.label?.includes('月') })}
        >
          {value.label}
        </div>
      </div>
    </div>
  );
  return child;
};

export default MonthCard;
