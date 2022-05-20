import { ErrorHandler } from "../../errors";
import { byElevenToDVSum } from "../../utils/byElevenToDVSum";

// verifica a DV principal a partir do código de barra
const checkMainFieldDV = (
  fieldString: string,
  referenceDV: string
): boolean => {
  const mainDVReference = byElevenToDVSum(fieldString);

  const digitRuleValue = 11;

  let finalMainDV = digitRuleValue - (mainDVReference % digitRuleValue);
  if (finalMainDV === 10 || finalMainDV === 11) {
    finalMainDV = 1;
  }

  return finalMainDV === Number(referenceDV);
};

export const verifyMainTitleDV = (barcode: string) => {
  const firstField = barcode.slice(0, 4);
  const secondField = barcode.slice(5);

  const referenceDV = barcode[4];
  const fieldString = firstField + secondField;

  if (!checkMainFieldDV(fieldString, referenceDV)) {
    // caso não coincidam estoura o erro
    throw new ErrorHandler(400, "Billet code mismatch the identifier code");
  }
};
