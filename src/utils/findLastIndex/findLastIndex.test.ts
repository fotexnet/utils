import findLastIndex from './findLastIndex';

describe('findLastIndex', () => {
  it('should find last index', () => {
    const arr = [1, 2, 7, 4, 5, 2, 6, 8];
    const result = findLastIndex(arr, x => x === 2);
    expect(result).toBe(5);
  });
});
