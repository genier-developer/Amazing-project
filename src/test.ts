export function someFunction(parameter: number): string {
  const result = `called someFunction with ${parameter} ${typeof parameter}`;
  console.log(result);
  return result;
}
