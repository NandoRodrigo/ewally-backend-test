import { ErrorHandler } from "../../errors";
import { byElevenToDVSum } from "../../utils/byElevenToDVSum";
import { byTenToDVSum } from "../../utils/byTenToDVSum";

export const verifyDealershipTitleDV = (billetCode: string) => {
  // cria a linha do código de barras sem os DVs
  const fieldString =
    billetCode.slice(0, 3) +
    billetCode.slice(4, 11) +
    billetCode.slice(12, 23) +
    billetCode.slice(24, 35) +
    billetCode.slice(36, 47);
  const moduleRef = billetCode[2];
  const mainDVReference = billetCode[3];

  let finalMainDV: number = 0;

  // realiza a soma dos digitos a partir da regra empregada pelo segmento
  if (moduleRef === "6" || moduleRef === "7") {
    finalMainDV = byTenToDVSum(fieldString);
    finalMainDV = finalMainDV % 10;
    if (finalMainDV > 0) {
      finalMainDV = 10 - finalMainDV;
    }
  } else if (moduleRef === "8" || moduleRef === "9") {
    finalMainDV = byElevenToDVSum(fieldString);
    finalMainDV = finalMainDV % 11;
    finalMainDV = 11 - finalMainDV;
    if (finalMainDV <= 1) {
      finalMainDV = 0;
    }
  } else {
    // caso o segmento não seja um dos permitidos estoura o erro
    throw new ErrorHandler(400, "It's not possible to verify the tax factor");
  }

  // caso o digito informado seja diferente da soma do codigo de barras estoura o erro
  if (finalMainDV !== Number(mainDVReference)) {
    throw new ErrorHandler(400, "Invalid billet code");
  }
};
