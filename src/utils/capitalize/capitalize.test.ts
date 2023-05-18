import capitalize from './capitalize';

describe('capitalize', () => {
  it('should make first letter uppercase', () => {
    const text = 'hello world!';
    const capitalized = capitalize(text);
    expect(capitalized).toEqual('Hello world!');
  });
  it('should return an empty string in case of an empty string argument', () => {
    const text = '';
    const capitalized = capitalize(text);
    expect(capitalized).toEqual('');
  });
});
