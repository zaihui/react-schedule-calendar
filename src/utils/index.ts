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

export const transformTimeToHeight = (time: string): number => {
  const hour = dayjs(time).hour();
  const minute = dayjs(time).minute();

  return hour * 60 + minute;
};

export const transformTimeToRect = (
  start: string,
  end: string,
): { height: number; top: number } => {
  const startPoint = transformTimeToHeight(start);
  const endPoint = transformTimeToHeight(end);

  return { height: endPoint - startPoint, top: startPoint };
};
