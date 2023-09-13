import extractDirtyObject from './extractDirtyObject';

describe('extractDirtyObject', () => {
  it('should extract dirty fields', () => {
    const baseObj = { a: 1, b: 2, c: false };
    const submittedObj = { a: 1, b: 2, c: true };
    const dirtyObj = extractDirtyObject(baseObj, submittedObj);
    expect(dirtyObj).toMatchObject({ c: true });
  });
  it('should throw error if any key is missing in submitted object', () => {
    const baseObj = { a: 1, b: 2, c: false };
    const submittedObj = { a: 1, b: 2, d: 3 };
    expect(() => extractDirtyObject(baseObj, submittedObj)).toThrow();
  });
});
