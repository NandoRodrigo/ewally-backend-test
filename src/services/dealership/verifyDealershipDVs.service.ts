import { ErrorHandler } from "../../errors";
import { byElevenToDVSum } from "../../utils/byElevenToDVSum";
import { byTenToDVSum } from "../../utils/byTenToDVSum";

const checkFieldDV = (
  fieldString: string,
  dv: string,
  moduleRef: string
): boolean => {
  let finalDV: number = 0;

  // verifica se as DVs batem com o respectivo campo baseado nas regras
  if (moduleRef === "6" || moduleRef === "7") {
    const basisValue = byTenToDVSum(fieldString);
    const currentValue = basisValue % 10;
    if (currentValue > 0) {
      finalDV = 10 - currentValue;
    }
  } else if (moduleRef === "8" || moduleRef === "9") {
    const basisValue = byElevenToDVSum(fieldString);
    let currentValue = basisValue % 11;
    finalDV = 11 - currentValue;

    if (currentValue <= 1) {
      finalDV = 0;
    }
  } else {
    // caso o dígito para verificar a regra seja diferente dos permitidos, estoura um erro
    throw new ErrorHandler(400, "It's not possible to verify the tax factor");
  }

  return finalDV === Number(dv);
};

export const verifyDealershipDVs = (billetCode: string) => {
  // separa cada campo para verificação e seus respectivos DVs
  const firstField = billetCode.slice(0, 11);
  const firstFieldDV = billetCode[11];
  const secondField = billetCode.slice(12, 23);
  const secondFieldDV = billetCode[23];
  const thirdField = billetCode.slice(24, 35);
  const thirdFieldDV = billetCode[35];
  const fourthField = billetCode.slice(36, 47);
  const fourthFieldDV = billetCode[47];

  const moduleRef = billetCode[2];

  if (
    !checkFieldDV(firstField, firstFieldDV, moduleRef) ||
    !checkFieldDV(secondField, secondFieldDV, moduleRef) ||
    !checkFieldDV(thirdField, thirdFieldDV, moduleRef) ||
    !checkFieldDV(fourthField, fourthFieldDV, moduleRef)
  ) {
    // caso algum campo não coincida com o DV informado, estoura o erro
    throw new ErrorHandler(400, "Invalid billet code");
  }
};
