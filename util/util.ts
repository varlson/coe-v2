import { weekDay } from "@/types/types";

export const textSplitter = (text: string, size = 150) => {
  if (text.length >= 172) {
    return text.substring(0, size) + "...";
  }

  return text;
};

export const dateFormater = (date_str: string) => {
  const date = new Date(date_str);
  const [year, month, day, week] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    weekDay[date.getDay()],
  ];

  const formared = `${week}, ${day}-${month}-${year}`;
  return formared;
};
