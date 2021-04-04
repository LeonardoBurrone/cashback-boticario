export const documentMask = (document: string) => {
  let mask = document ? document.replace(/\D/g, '') : '';

  if (mask.length === 3) {
    mask = mask.replace(/(\d{3})/, '$1');
  } else if (mask.length > 3 && mask.length <= 6) {
    mask = mask.replace(/(\d{3})(\d+)/, '$1.$2');
  } else if (mask.length > 6 && mask.length <= 9) {
    mask = mask.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
  } else if (mask.length > 9 && mask.length <= 11) {
    mask = mask.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  } else if (mask.length === 12) {
    mask = mask.replace(/(\d{2})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3/$4');
  } else if (mask.length > 12) {
    mask = mask.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/, '$1.$2.$3/$4-$5');
  }

  return mask;
};

export const unmask = (document: string) => {
  return document.replace(/[^0-9]+/g, '');
};
