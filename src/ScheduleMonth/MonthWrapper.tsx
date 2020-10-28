import * as React from 'react';
import cx from 'classnames';

import { getMonthDay, getGroupArray } from '../utils';
import { WeekText } from '../constants';
import MonthCard from './MonthCard';

export interface MonthWrapperProps {
  value: string;
  prefix?: string;
  className?: string;
  children?: React.ReactElement | React.ReactElement[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MonthWrapper: React.ForwardRefRenderFunction<any, MonthWrapperProps> = (props, ref) => {
  const { value, prefix = 'month-wrapper', className: clsName } = props;
  const className = cx(clsName, prefix);
  const wrapperRef = React.useRef<HTMLTableElement>();

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
        {getGroupArray(getMonthDay(value), 7).map((w, i) => (
          <tr key={`${i}`}>
            {w.map(d => (
              <td className={`${prefix}-body-item`} key={d.date}>
                <MonthCard value={d} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.forwardRef(MonthWrapper);
