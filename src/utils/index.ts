import dayjs from 'dayjs';

export const getNumsArray = (num: number) => {
  const results: string[] = [];
  let i = 0;
  while (i < num) {
    results.push(`${i}`.padStart(2, '0'));
    i += 1;
  }
  return results;
};

export const transformTimeToRect = (
  start: string,
  end: string,
): { height: number; top: number } => {
  const startHour = dayjs(start).hour();
  const startMinute = dayjs(start).minute();
  const startPoint = startHour * 60 + startMinute;
  const endHour = dayjs(end).hour();
  const endMinute = dayjs(end).minute();
  const endPoint = endHour * 60 + endMinute;

  return { height: endPoint - startPoint, top: startPoint };
};
