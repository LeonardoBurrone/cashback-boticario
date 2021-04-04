export const checkValidEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(value.toLowerCase());
};

export const validateEmail = (email: string) => {
  if (email.length > 0) {
    if (checkValidEmail(email)) {
      return '';
    } else {
      return 'E-mail inválido';
    }
  } else {
    return 'Campo obrigatório';
  }
};
