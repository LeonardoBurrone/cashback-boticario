const checkInvalid = (numberParam: string) => {
  const cpf = numberParam.toString();

  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false;
  } else {
    return true;
  }
};

const checkCPFDV = (numberParam: string, dv: string) => {
  const check = numberParam
    .split('')
    .map((item: any, i) => {
      const res = item * (numberParam.length + 1 - i);

      return res;
    })
    .reduce((x, y) => {
      return x + y;
    });

  let result = 11 - (check % 11);

  if (result === 10 || result === 11) {
    result = 0;
  }

  return result.toString() === dv;
};

const CPF = (cpf: string) => {
  cpf = cpf.replace(/\D/g, '');
  if (checkInvalid(cpf)) {
    const numberValue = cpf.toString().slice(0, -2);
    const dv1 = cpf.toString()[9];
    const dv2 = cpf.toString()[10];
    if (checkCPFDV(numberValue, dv1) && checkCPFDV(numberValue + dv1, dv2)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const validateDocument = (document: string) => {
  const length = document.length;

  if (length === 0) {
    return '';
  } else if (length > 0 && length < 11) {
    return 'CPF inválido';
  } else if (length === 11) {
    return CPF(document) ? '' : 'CPF inválido';
  } else {
    return 'CPF inválido';
  }
};

const checkValidEmail = (value: string) => {
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

export const validateName = (name: string) => {
  const isNameValid = !!name.match(
    /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{2,}\s[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{1,}/
  );

  if (name.length > 0) {
    if (isNameValid) {
      return '';
    } else {
      return 'Nome inválido';
    }
  } else {
    return 'Campo obrigatório';
  }
};
