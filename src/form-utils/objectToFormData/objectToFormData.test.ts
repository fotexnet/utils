import objectToFormData from './objectToFormData';

describe('objectToFormData', () => {
  it('should transform a FormData instance to an object', () => {
    const obj = { a: 1, b: 2, c: true };
    const formData = objectToFormData(obj);
    expect(formData.get('a')).toEqual('1');
    expect(formData.get('b')).toEqual('2');
    expect(formData.get('c')).toEqual('true');
  });
});
