import { IDealershipBilletData } from "../../interfaces";

// cria o código de barras
export const dealerBarcodeMaker = (
  billetData: IDealershipBilletData
): string => {
  const barcode =
    billetData.dealership_code +
    billetData.service_id +
    billetData.reference_id +
    billetData.main_dv +
    billetData.value +
    (billetData.company_id ? billetData.company_id : "") +
    (billetData.company_document ? billetData.company_document : "") +
    billetData.custom_field;

  return barcode;
};
