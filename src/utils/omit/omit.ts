function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, params: K[]): Omit<T, K> {
  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (params.includes(key as K)) continue;
    result[key] = value;
  }

  return result as Omit<T, K>;
}

export default omit;
