export const dealershipDateGenerator = (expiresFactor: string): string => {
  // ordena e formata a data vindo pelo campo personalizado do boleto
  const dateRef =
    expiresFactor.slice(4, 6) +
    "/" +
    expiresFactor.slice(6, 8) +
    "/" +
    expiresFactor.slice(0, 4);

  let expiresDate = "";
  try {
    // tenta criar uma data com os dados recebidos
    expiresDate = new Date(dateRef).toISOString().split("T")[0];
  } catch (err) {
    // caso não seja uma data válida retorna uma zerada
    expiresDate = "0000-00-00";
  }

  return expiresDate;
};
