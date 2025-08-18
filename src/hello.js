export function hello(name) {
  if (name === undefined || name === null) return 'hello world';
  return `hello ${String(name)}`;
}
