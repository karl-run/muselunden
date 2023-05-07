export function safeLowerCase<T extends string>(input: T): Lowercase<T> {
  return input.toLowerCase() as Lowercase<T>;
}
