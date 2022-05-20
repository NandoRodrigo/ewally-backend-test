import { IBilletContent, IDealershipBilletData } from "../../interfaces";
import { dealerBarcodeMaker } from "./dealershipBarcodeMaker.service";
import { dealershipDateGenerator } from "./dealershipDateGenerator.service";
import { verifyDealershipDVs } from "./verifyDealershipDVs.service";
import { verifyDealershipTitleDV } from "./verifyMainDealershipDV.service";

export const dealershipService = (billetCode: string): IBilletContent => {
  // verificação das DVs da linha digitável
  verifyDealershipDVs(billetCode);
  verifyDealershipTitleDV(billetCode);

  // instancia um objeto do boleto de convênio retirando os DVs dos campos 1 ao 4
  const billetData: IDealershipBilletData = {
    dealership_code: billetCode[0],
    service_id: billetCode[1],
    reference_id: billetCode[2],
    main_dv: billetCode[3],
    value: billetCode.slice(4, 11) + billetCode.slice(12, 16),
    custom_field:
      billetCode[1] === "6"
        ? billetCode.slice(25, 35) + billetCode.slice(36, 47)
        : billetCode.slice(20, 23) +
          billetCode.slice(24, 35) +
          billetCode.slice(36, 47),
  };

  // armazena os campos dos dados referente à compania diferenciando identificação de CNPJ/MF
  if (billetCode[1] === "6") {
    billetData.company_document = billetCode.slice(16, 23) + billetCode[24];
  } else {
    billetData.company_id = billetCode.slice(16, 19);
  }

  const barcode = dealerBarcodeMaker(billetData);

  return {
    amount: (Number(billetData.value) / 100).toFixed(2),
    barCode: barcode,
    expirationDate: dealershipDateGenerator(billetData.custom_field),
  };
};
