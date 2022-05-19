export const dateGenerator = (expires_factor: string): string => {
  const factor = Number(expires_factor);

  let date = new Date("10/07/1997");
  date.setTime(date.getTime() + factor * 24 * 60 * 60 * 1000);

  const string_date = date.toISOString().split("T")[0];

  return string_date;
};
