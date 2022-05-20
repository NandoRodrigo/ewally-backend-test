import { IBilletContent, ITitleBilletData } from "../../interfaces";
import { titleBarcodeMaker } from "./titleBarcodeMaker.service";
import { titleDateGenerator } from "./titleDateGenerator.service";
import { verifyTitleDVs } from "./verifyTitleDVs.service";
import { verifyMainTitleDV } from "./verifyMainTitleDV.service";

export const titleService = (billetCode: string): IBilletContent => {
  // instancia um objeto do boleto de título
  const billetData: ITitleBilletData = {
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

  // verifica os DVs
  verifyTitleDVs(billetData);

  // cria o código de barras
  const barcode = titleBarcodeMaker(billetData);

  // verifica o DV principal a partir do código de barras
  verifyMainTitleDV(barcode);

  const billetContent: IBilletContent = {
    amount: (Number(billetData.value) / 100).toFixed(2),
    barCode: barcode,
    expirationDate: titleDateGenerator(billetData.expires_factor),
  };

  return billetContent;
};
