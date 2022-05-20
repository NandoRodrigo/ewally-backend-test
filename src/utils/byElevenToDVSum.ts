export const byElevenToDVSum = (fieldString: string): number => {
  const numberArray: Array<number> = fieldString
    .split("")
    .reverse()
    .map((curr) => Number(curr));

  let finalDVValue: number = 0;

  for (let i = 1; i <= numberArray.length; i++) {
    const maxPossibleMultiplier = 8;

    if (i % maxPossibleMultiplier === 0) {
      finalDVValue += numberArray
        .slice(i - maxPossibleMultiplier, i)
        .map((value, index) => (index + 2) * value)
        .reduce((acc, curr) => acc + curr);
    }
  }

  finalDVValue += numberArray
    .slice(-3)
    .map((value, index) => (index + 2) * value)
    .reduce((acc, curr) => acc + curr);

  return finalDVValue;
};
