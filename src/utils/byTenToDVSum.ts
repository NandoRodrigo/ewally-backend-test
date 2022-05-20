// função para encontrar a soma dos dígitos baseado no modulo 10
export const byTenToDVSum = (fieldString: string): number => {
  const finalDVValue: number = fieldString
    .split("")
    .reverse()
    .map((curr) => Number(curr))
    .map((value, index) =>
      index % 2 === 0
        ? value * 2 > 9
          ? (value * 2)
              .toString()
              .split("")
              .map((curr) => Number(curr))
              .reduce((acc, curr) => acc + curr)
          : value * 2
        : value
    )
    .reduce((acc, curr) => acc + curr);

  return finalDVValue;
};
