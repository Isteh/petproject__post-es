export function firstLetterCapitalize(string: string) {
  let result = [string[0].toUpperCase()];
  for (let i = 1; i < string.length; i++) {
    result.push(string[i]);
  }
  return result.join('');
}
