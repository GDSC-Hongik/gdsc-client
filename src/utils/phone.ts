/**
 * 입력된 값의 길이에 따라 휴대전화 번호 형식에 맞는 string 반환
 * @param phoneNumber
 * @returns 000, 000-0, 000-00, 000-0000-0000
 */
export function formatPhoneNumberInProgress(
  phoneNumber: string | null | undefined
): string {
  if (!phoneNumber) {
    return '';
  }

  const normalizedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');

  if (normalizedPhoneNumber.length <= 3) {
    return normalizedPhoneNumber;
  }

  const formattedPhoneNumberParts = [];

  if (normalizedPhoneNumber.length < 8) {
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(0, 3));
    formattedPhoneNumberParts.push(normalizedPhoneNumber.substring(3));
  } else {
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(0, 3));
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(3, 7));
    formattedPhoneNumberParts.push(normalizedPhoneNumber.slice(7, 11));
  }

  return formattedPhoneNumberParts.join('-');
}

/**
 * 주어진 문자열에서 '-' 제거
 * @param str 000-0000-0000
 * @returns 00000000000
 */
export function removeHyphens(str: string | undefined) {
  return (str ?? '').replaceAll('-', '');
}
