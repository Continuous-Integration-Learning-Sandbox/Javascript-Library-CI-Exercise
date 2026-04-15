const { toSnakeCase } = require('./index');

test('should convert string to snake_case', () => {
    expect(toSnakeCase('Hello World')).toBe('hello_world');
});