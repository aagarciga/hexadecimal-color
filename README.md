# Hexadecimal-color

Helper functions for working with 6-character RRGGBB CSS and 3-character RGB shorthand hexadecimal color values.

## Usage/Examples

Hexadecimal values are base-16, so they are usually shorter than base-10 numbers.

To specify 0 to 255 in hex, you'd use 00 to FF, saving a byte for higher colors.

RGB triplets can be abbreviated if each of the Red, Green, and Blue hexadecimal pairs are the same.

### hexadecimalColor.contrast()

```javascript
import hexColor from 'hexadecimal-color';
...
const theme = hexColor.contrast(color); // will return dark or light depending on 'color'
...
```

### hexadecimalColor.unhash()

```javascript
import hexadecimalColor from 'hexadecimal-color';
...
const color = "#ff5000";
const value = hexadecimalColor.unhash(color);
console.log(value); // will print 'ff5000' in the console
...
```

### hexadecimalColor.expand()

```javascript
import hexadecimalColor from 'hexadecimal-color';
...
const color = "#f50";
const value = hexadecimalColor.expand(color);
console.log(value); // will print 'ff5500' in the console
...
```

### hexadecimalColor.toRGB()

```javascript
import hexadecimalColor from 'hexadecimal-color';
...
const color = "#fff";
const value = hexadecimalColor.toRGB(color);
console.log(value); // will print [255, 255, 255] in the console
...
```

### hexadecimalColor.fromRGB()

```javascript
import hexadecimalColor from 'hexadecimal-color';
...
const color = [255, 0, 0];
const value = hexadecimalColor.fromRGB(color);
console.log(value); // will print "#FF0000" in the console
...
```

### hexadecimalColor.isColor()

```javascript
import hexadecimalColor from 'hexadecimal-color';
...
const color = "#fff";
const value = hexadecimalColor.isColor(color);
console.log(value); // will print true in the console.
// Other values like "#12zr4c", "#aabb", "something", etc. will result false
...
```

## Authors

- [@aagarciga](https://www.github.com/aagarciga) Alex Alvarez Gárciga

## Badges

[![Language Typescript](https://img.shields.io/badge/language-typescript-blue)](https://www.typescriptlang.org/)

[![Code Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](#)

## Command history

This project was created as my first npm package using the following commands.

```
npm init
npm i -D typescript
tsc --init
npm link
npm run prepublish
npm i -D jest ts-jest @types/jest
npx ts-jest config:init
```
