/**
 * The function `documentValidator` validates a Dominican Republic
 * identification document number.
  @param {string} document - The document number to validate (Cédula de Identidad y Electoral).
 * string representing the document number as input and performs a series of calculations to validate
 * it.
 * @returns The function `documentValidator` is returning a boolean value - `true` if the
 * provided Dominican document number is valid, and `false` if it is not valid.
 */
export function documentValidator(document: string): boolean {
  try {
    const documentId: string = removeHyphens(document);

    if (documentId.length !== 11) {
      throw new Error('The provided document must have 11 characters.');
    }

    const digits = documentId.split('').map(Number);
    const checkDigit = calculateDigits(digits.slice(0, 10));

    return checkDigit === digits[10];
  } catch (error: any) {
    console.error(error.message);
    return false;
  }
}

function removeHyphens(documentId: string): string {
  if (documentId.includes('-')) {
    return documentId.replace(/-/g, '');
  }
  return documentId;
}

/**
 * Calculates the check digit for a document number.
 * @param {number[]} digits - The first 10 digits of the document.
 * @returns {number} - The calculated check digit.
 */
function calculateDigits(digits: number[]): number {
  const weights = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    const product = digits[i] * weights[i];
    sum += sumDigits(product);
  }

  const nextTen = Math.ceil(sum / 10) * 10;
  return nextTen - sum;
}

/**
 * Sums the digits of a number.
 * @param {number} num - The number whose digits will be summed.
 * @returns {number} - The sum of the digits of the number.
 */
function sumDigits(num: number): number {
  return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}