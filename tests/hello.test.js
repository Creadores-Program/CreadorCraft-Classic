import { hello } from '../src/hello.js';

test('hello without name returns hello world', () => {
  expect(hello()).toBe('hello world');
});

test('hello with name returns hello <name>', () => {
  expect(hello('Enrique')).toBe('hello Enrique');
});
