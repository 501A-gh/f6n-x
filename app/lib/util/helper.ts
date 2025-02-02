export const truncate = (str: string, len: number): string =>
  str.length <= len ? str : str.substring(0, len) + "...";
