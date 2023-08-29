function currency(value: number, locale: string, options?: Omit<Intl.NumberFormatOptions, 'style'>): string {
  const formatter = new Intl.NumberFormat(locale, { style: 'currency', ...options });
  return formatter.format(value);
}

export default currency;
