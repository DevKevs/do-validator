/**
 * The function `documentValidator` in TypeScript validates a Dominican Republic
 * identification document number.
 * @param {string} document - The code you provided is a function that validates a Dominican Republic
 * national identification document number (Cédula de Identidad y Electoral). The function takes a
 * string representing the document number as input and performs a series of calculations to validate
 * it.
 * @returns The function `documentValidator` is returning a boolean value - `true` if the
 * provided Dominican document number is valid, and `false` if it is not valid.
 */
export function documentValidator(document: string): boolean {
  const documentId: string = removeHyphens(document);

  if (documentId.length != 11) {
    throw new Error('The provided document should have only 11 characters');
  }

  const c = documentId.split('');
  const v = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  let result = 0;
  let oc;

  for (let i = 0; i < 10; i++) {
    const up = parseInt(c[i]) * v[i];
    const ab = up;

    if (ab >= 10) {
      oc = ab
        .toString()
        .split('')
        .map((x) => parseInt(x))
        .reduce((x, y) => x + y);
    } else {
      oc = ab;
    }

    result += oc;
  }

  let dp = result;
  let ac: any = dp.toString().split('')[0] + '0';
  ac = parseInt(ac);
  const uj = (ac / 10) * 10;

  if (uj < dp) {
    // eslint-disable-next-line prettier/prettier
    dp = uj + 10 - dp;
  }

  const validationResult = c[10] == dp.toString();

  if (validationResult) {
    return true;
  } else {
    return false;
  }
}

function removeHyphens(documentId: string): string {
  if (documentId.includes('-')) {
    return documentId.replace(/-/g, '');
  }
  return documentId;
}
