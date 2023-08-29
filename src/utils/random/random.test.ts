import random from './random';

describe('random', () => {
  it('should create a random number', () => {
    const result = new Array(100).fill(random(0, 5)).every(x => x >= 0 && x < 5);
    expect(result).toBeTruthy();
  });
});
