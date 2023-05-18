import omit from './omit';

describe('omit', () => {
  it('should omit specified keys', () => {
    const obj = { a: 1, b: 2, c: false };
    const result = omit(obj, ['a']);
    expect(Object.keys(result)).toMatchObject(['b', 'c']);
  });
});
