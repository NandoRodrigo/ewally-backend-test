import { ErrorHandler } from "../../errors";

const checkMainFieldDV = (
  fieldString: string,
  referenceDV: string
): boolean => {
  const numberArray: Array<number> = fieldString
    .split("")
    .reverse()
    .map((curr) => Number(curr));

  let mainDVReference: number = 0;

  for (let i = 1; i <= numberArray.length; i++) {
    const maxPossibleMultiplier = 8;

    if (i % maxPossibleMultiplier === 0) {
      mainDVReference += numberArray
        .slice(i - maxPossibleMultiplier, i)
        .map((value, index) => (index + 2) * value)
        .reduce((acc, curr) => acc + curr);
    }
  }

  mainDVReference += numberArray
    .slice(-3)
    .map((value, index) => (index + 2) * value)
    .reduce((acc, curr) => acc + curr);

  const digitRuleValue = 11;

  let finalMainDV = digitRuleValue - (mainDVReference % digitRuleValue);
  if (finalMainDV === 10 || finalMainDV === 11) {
    finalMainDV = 1;
  }

  return finalMainDV === Number(referenceDV);
};

export const verifyMainDV = (barcode: string) => {
  const firstField = barcode.slice(0, 4);
  const secondField = barcode.slice(5);

  const referenceDV = barcode[4];
  const fieldString = firstField + secondField;

  if (!checkMainFieldDV(fieldString, referenceDV)) {
    throw new ErrorHandler(400, "Billet code mismatch the identifier code");
  }
};
