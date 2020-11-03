import * as React from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';

import { getMonthDay, getGroupArray } from '../utils';
import { WeekText } from '../utils/constants';

export interface MonthWrapperProps {
  value?: string;
  prefix?: string;
  className?: string;
  children?: React.ReactElement | React.ReactElement[];
}

const MonthWrapper: React.ForwardRefRenderFunction<any, MonthWrapperProps> = (props, ref) => {
  const { value = dayjs().format('YYYY-MM'), prefix = 'month-wrapper', className: clsName, children } = props;
  const className = cx(clsName, prefix);
  const wrapperRef = React.useRef<HTMLTableElement>();

  React.useImperativeHandle(ref, () => wrapperRef)
  return (
    <table className={className} ref={wrapperRef} cellSpacing="0">
      <thead className={`${prefix}-header`}>
        <tr>
          {WeekText.map(v => (
            <th key={v.labelEn} className={`${prefix}-header-item`}>
              <div className={`${prefix}-header-item-cn`}>{v.labelCn}</div>
              <div className={`${prefix}-header-item-en`}>{v.labelEn}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={`${prefix}-body`}>
        {getGroupArray(getMonthDay(dayjs(value).format('YYYY-MM')), 7).map((w, i) => (
          <tr key={`${i}`}>
            {w.map(d => (
              <td className={`${prefix}-body-item`} key={d.date}>
                <div className={cx(`${prefix}-body-item-card`, { show: d.isShow })}>
                  <div className={cx(`${prefix}-body-item-card-day`, {
                    selected: dayjs().isSame(d.date, 'day'),
                    special: d.label?.includes('月') })}
                  >
                    {d.label}
                  </div>
                </div>
                {
                  React.Children.map(children, (c: React.ReactElement) =>
                    (dayjs(c.props.date).isSame(dayjs(d.date))
                      ? <section className={`${prefix}-body-item-content`}>{c}</section>
                      : null))
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.forwardRef(MonthWrapper);
