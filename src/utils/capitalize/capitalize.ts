function capitalize(str: string): string {
  if (!str) return str;
  return str[0].toUpperCase() + str.substring(1);
}

export default capitalize;
