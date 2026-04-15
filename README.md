# @armand-veress/string-toolkit

A small, useful JavaScript library for string manipulation.

## Context
This project was developed as part of a Continuous Integration course exercise. 
The goal was to demonstrate:
- Semantic Versioning
- Unit Testing with Jest
- Documentation standards (CONTRIBUTING, SECURITY, Templates)
- NPM Publishing workflow

## Installation

Install using npm:
```bash
npm install @armand-veress/string-toolkit
```

Or using yarn:
```bash
yarn add @armand-veress/string-toolkit
```

## Usage

**toSnakeCase** => Converts a String to snake_case
```Javascript
const { toSnakeCase } = require('@armand-veress/string-toolkit');
console.log(toSnakeCase("Hello World")); // Output: "hello_world"
```

## Development
To run tests:
```bash
npm test
```
