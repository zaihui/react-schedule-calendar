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

  // top需要有10px的padding-top
  return { height: endPoint - startPoint, top: startPoint + 10 };
};

/**
 * 将数组等分
 * @param array
 * @param num 等分的值
 */
export const getGroupArray = (array: any[], num: number) => {
  let index = 0;
  const newArray = [];
  while (index < array.length) {
    newArray.push(array.slice(index, (index += num)));
  }
  return newArray;
};

/**
 * 获得日历面板当月的显示日期
 * @param date YYYY-MM
 */
export const getMonthDay = (
  date: string,
): {
  isShow: boolean;
  label: string;
  date: string;
}[] => {
  const nowDaysNum = dayjs(date).daysInMonth();
  const prevDaysNum = dayjs(date)
    .subtract(1, 'month')
    .daysInMonth();
  const startWeek = dayjs(`${date}-01`).day();
  const endWeek = dayjs(`${date}-${nowDaysNum}`).day();
  const prevDays = [];
  const nextDays = [];
  const nowDays = [];
  let i = prevDaysNum - startWeek + 1;
  let j = 1;
  let k = 1;
  while (i <= prevDaysNum) {
    prevDays.push({
      isShow: false,
      label: `${i}`,
      date: dayjs(date)
        .subtract(1, 'month')
        .set('date', i)
        .format('YYYY-MM-DD'),
    });
    i += 1;
  }
  while (j <= 6 - endWeek) {
    nextDays.push({
      isShow: false,
      label:
        j === 1
          ? `${dayjs(date)
              .add(1, 'month')
              .month() + 1}月`
          : `${j}`,
      date: dayjs(date)
        .add(1, 'month')
        .set('date', j)
        .format('YYYY-MM-DD'),
    });
    j += 1;
  }
  while (k <= nowDaysNum) {
    nowDays.push({
      isShow: true,
      label: k === 1 ? `${dayjs(date).month() + 1}月` : `${k}`,
      date: dayjs(date)
        .set('date', k)
        .format('YYYY-MM-DD'),
    });
    k += 1;
  }
  return prevDays.concat(nowDays).concat(nextDays);
};
