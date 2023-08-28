function findLastIndex<T>(arr: T[], predicate: (value: T) => boolean): number {
  let lastIndex: number = arr.length - 1;
  while (lastIndex >= 0 && !predicate(arr[lastIndex])) {
    lastIndex--;
  }
  if (lastIndex >= 0) return lastIndex;
  return -1;
}

export default findLastIndex;
