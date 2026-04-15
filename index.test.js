const { toSnakeCase, toKebabCase } = require('./index');

test('should convert string to snake_case', () => {
    expect(toSnakeCase('Hello World')).toBe('hello_world');
});

test('should convert string to kebab-case', () => {
    expect(toKebabCase('Hello World')).toBe('hello-world');
});