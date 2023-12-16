export const checkValidateData = (email, password) => {
  console.log(email, password);
  const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email Id Is Not Valid";
  if (!isPasswordValid) return "Password Not Valid";
  return null;
};
