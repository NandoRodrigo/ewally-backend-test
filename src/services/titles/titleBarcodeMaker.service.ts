import { ITitleBilletData } from "../../interfaces";

export const titleBarcodeMaker = (billetData: ITitleBilletData): string => {
  const barcode: string =
    billetData.bank_id +
    billetData.currency +
    billetData.barcode_dv +
    billetData.expires_factor +
    billetData.value +
    billetData.first_custom_field +
    billetData.second_custom_field +
    billetData.third_custom_field;

  return barcode;
};
