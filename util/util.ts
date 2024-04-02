export const textSplitter = (text: string) => {
  if (text.length >= 172) {
    return text.substring(0, 150) + "...";
  }

  return text;
};
