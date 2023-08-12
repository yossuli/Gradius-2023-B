export const isDifference = <T>(current: T, next: T) =>
  JSON.stringify(current) !== JSON.stringify(next);
