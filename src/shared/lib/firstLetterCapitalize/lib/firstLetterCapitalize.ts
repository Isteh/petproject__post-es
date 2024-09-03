export function firstLetterCapitalize(string: string) {
  const result = [string[0].toUpperCase()];
  for (let i = 1; i < string.length; i++) {
    result.push(string[i]);
  }
  return result.join('');
}
