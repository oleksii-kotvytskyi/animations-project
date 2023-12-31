const generateValue = () => Math.ceil(Math.random() * 10000);

const dayByNumber = (day: Date) => {
  return day.toLocaleDateString("default", {
    weekday: "short",
  });
};

const createDayPlusNumber = (dayToStart: Date, dayToSum: number) => {
  const newDate = new Date(
    dayToStart.getFullYear(),
    dayToStart.getMonth(),
    dayToStart.getDate() + dayToSum
  );

  return dayByNumber(newDate);
};

export const getPrevWeek = () => {
  const d = new Date();
  // set to Monday of this week
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  // set to previous Monday
  d.setDate(d.getDate() - 7);

  const prevSunday = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 6);

  return {
    mondayFullDate: d,
    monday: d.toLocaleDateString("default", {
      month: "short",
      day: "numeric",
    }),
    sunday: prevSunday.toLocaleDateString("default", {
      month: "short",
      day: "numeric",
    }),
  };
};

export const generateData = (date: Date, items: number) => {
  return {
    data: [
      {
        day: createDayPlusNumber(date, 0),
        values: Array.from({ length: items }, generateValue),
      },
      {
        day: createDayPlusNumber(date, 1),
        values: Array.from({ length: items }, generateValue),
      },
      {
        day: createDayPlusNumber(date, 2),
        values: Array.from({ length: items }, generateValue),
      },
      {
        day: createDayPlusNumber(date, 3),
        values: Array.from({ length: items }, generateValue),
      },
      {
        day: createDayPlusNumber(date, 4),
        values: Array.from({ length: items }, generateValue),
      },
      {
        day: createDayPlusNumber(date, 5),
        values: Array.from({ length: items }, generateValue),
      },
      {
        day: createDayPlusNumber(date, 6),
        values: Array.from({ length: items }, generateValue),
      },
    ],
  };
};

export const createCoordinate = (x: number, y: number) => {
  return `${x},${y}`;
};

export const colorPerGraph: Record<number, string> = {
  0: "red",
  1: "blue",
  2: "orange",
  3: "grey",
};

export const companyPerGraph: Record<number, string> = {
  0: "Coca-cola",
  1: "Pepsi",
  2: "IBM",
  3: "BMW",
};
