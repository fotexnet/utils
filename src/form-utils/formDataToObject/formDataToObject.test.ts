import formDataToObject from './formDataToObject';

describe('formDataToObject', () => {
  it('should transform a FormData instance to an object', () => {
    const formData = new FormData();
    formData.set('a', '1');
    formData.set('b', '2');
    formData.set('c', 'true');

    const obj = formDataToObject(formData);
    expect(obj).toMatchObject({ a: '1', b: '2', c: 'true' });
  });
});
