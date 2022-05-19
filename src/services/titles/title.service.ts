import { IBilletContent, IBilletData } from "../../interfaces";
import { barcodeMaker } from "./barcodeMaker.service";
import { dateGenerator } from "./dateGenerator.service";
import { verifyDVs } from "./verifyDV.service";
import { verifyMainDV } from "./verifyMainDV.service";

export const titleService = (billetCode: string): IBilletContent => {
  const billetData: IBilletData = {
    bank_id: billetCode.slice(0, 3),
    currency: billetCode[3],
    first_custom_field: billetCode.slice(4, 9),
    first_field_dv: billetCode[9],
    second_custom_field: billetCode.slice(10, 20),
    second_field_dv: billetCode[20],
    third_custom_field: billetCode.slice(21, 31),
    third_field_dv: billetCode[31],
    barcode_dv: billetCode[32],
    expires_factor: billetCode.slice(33, 37),
    value: billetCode.slice(37),
  };

  verifyDVs(billetData);

  const barcode = barcodeMaker(billetData);

  verifyMainDV(barcode);

  const billetContent: IBilletContent = {
    amount: (Number(billetData.value) / 100).toFixed(2),
    barCode: barcode,
    expirationDate: dateGenerator(billetData.expires_factor),
  };

  return billetContent;
};
