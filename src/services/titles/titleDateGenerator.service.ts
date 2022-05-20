export const titleDateGenerator = (expiresFactor: string): string => {
  const factor = Number(expiresFactor);

  // calcula a data de vencimento a partir da data obrigatória convertendo o fator de vencimento em milisegundos
  let date = new Date("10/07/1997");
  date.setTime(date.getTime() + factor * 24 * 60 * 60 * 1000);

  const stringDate = date.toISOString().split("T")[0];

  return stringDate;
};
