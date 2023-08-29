import currency from './currency';

describe('currency', () => {
  it('should make currency format', () => {
    const value = currency(100000, 'hu-HU', { currency: 'HUF', maximumFractionDigits: 0 });
    expect(value).toBe('100\u00A0000\u00A0Ft');
    // \u00A0 : &nbsp; in unicode
  });
});
