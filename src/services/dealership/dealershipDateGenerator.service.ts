export const dealershipDateGenerator = (expiresFactor: string): string => {
  const dateRef =
    expiresFactor.slice(4, 6) +
    "/" +
    expiresFactor.slice(6, 8) +
    "/" +
    expiresFactor.slice(0, 4);

  console.log(expiresFactor.slice(0, 8));
  console.log(dateRef);
  let expiresDate = "";
  try {
    expiresDate = new Date(dateRef).toISOString().split("T")[0];
  } catch (err) {
    expiresDate = "0000-00-00";
  }

  return expiresDate;
};
