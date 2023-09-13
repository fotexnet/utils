import extractDirtyFormData from './extractDirtyFormData';

describe('extractDirtyFormData', () => {
  it('should extract dirty fields', () => {
    const baseFormData = new FormData();
    baseFormData.set('a', '1');
    baseFormData.set('b', '2');
    baseFormData.set('c', 'false');

    const submittedFormData = new FormData();
    submittedFormData.set('a', '1');
    submittedFormData.set('b', '2');
    submittedFormData.set('c', 'true');

    const dirtyFormData = extractDirtyFormData(baseFormData, submittedFormData);
    expect(dirtyFormData.get('a')).toEqual(null);
    expect(dirtyFormData.get('b')).toEqual(null);
    expect(dirtyFormData.get('c')).toEqual('true');
  });
});
