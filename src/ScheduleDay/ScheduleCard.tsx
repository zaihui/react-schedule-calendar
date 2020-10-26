import * as React from 'react';

import { transformTimeToRect } from '../utils';

export interface ScheduleCardProps {
  startTime: string;
  endTime: string;
}

const ScheduleCard: React.FC<ScheduleCardProps> = props => {
  const { children, startTime, endTime } = props;
  const rect = transformTimeToRect(startTime, endTime);
  return (
    <div className="schedule-card" style={{ height: rect.height, marginTop: rect.top }}>
      {children}
    </div>
  );
};

export default ScheduleCard;
