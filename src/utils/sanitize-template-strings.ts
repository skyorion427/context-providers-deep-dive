export const sanitizeTemplateString = (input: string): string =>
  input.replace(/^(\s{2})+/gm, '');

export default sanitizeTemplateString;
