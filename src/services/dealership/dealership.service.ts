import { IBilletContent } from "../../interfaces";

export const dealershipService = (billetCode: string): IBilletContent => {
  return { amount: "0", barCode: "12121", expirationDate: "12/08" };
};
