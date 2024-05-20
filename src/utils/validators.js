// la función recibe el valor de un input junto con su nombre, y devuelve un mensaje de error correspondiente al tipo de input
// si la comprobación falla, o muestra un mensaje vacío tiene éxito

export const inputValidator = (inputValue, inputName) => {
  if (inputValue === "") {
    return "Mandatory field, please enter your data";
  }

  if (inputValue.length > 50) {
    return "It is not possible to enter more than 50 characters";
  }
  if (
    inputName === "password" &&
    (inputValue.length <= 6 || inputValue.length >= 12)
  ) {
    return "Password must be between 6 and 12 characters";
  }
  if (
    inputName === "email" &&
    (!inputValue.includes("@") || !inputValue.includes("."))
  ) {
    return "Enter a valid email";
  }


  return "";
};
