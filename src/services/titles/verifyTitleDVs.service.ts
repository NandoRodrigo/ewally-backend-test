import { ErrorHandler } from "../../errors";
import { ITitleBilletData } from "../../interfaces";
import { byTenToDVSum } from "../../utils/byTenToDVSum";

const checkFieldDV = (fieldString: string, dv: string): boolean => {
  const basisValue = byTenToDVSum(fieldString);
  let currentValue = basisValue % 10;

  if (currentValue > 0) {
    currentValue = Math.floor(basisValue / 10) * 10 + 10 - currentValue;
  }

  const finalDV = currentValue.toString()[1];

  return finalDV === dv;
};

export const verifyTitleDVs = (billetData: ITitleBilletData) => {
  const firstField =
    billetData.bank_id + billetData.currency + billetData.first_custom_field;
  const secondField = billetData.second_custom_field;
  const thirdField = billetData.third_custom_field;

  if (
    !checkFieldDV(firstField, billetData.first_field_dv) ||
    !checkFieldDV(secondField, billetData.second_field_dv) ||
    !checkFieldDV(thirdField, billetData.third_field_dv)
  ) {
    throw new ErrorHandler(400, "Invalid billet code");
  }
};
