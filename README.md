# Hexadecimal-color

Helpers for working with hexadecimal color values.

## Usage/Examples

### hexadecimal.contrast

```javascript
import hexadecimal from 'hexadecimal-color';
...
const theme = hexadecimal.contrast(color); // will return dark or light depending on 'color'
...
```

### hexadecimal.unhash

```javascript
import hexadecimal from 'hexadecimal-color';
...
const color = "#ff5000";
const value = hexadecimal.unhash(color);
console.log(value); // will print 'ff5000' in the console
...
```

### hexadecimal.expand

```javascript
import hexadecimal from 'hexadecimal-color';
...
const color = "#f50";
const value = hexadecimal.expand(color);
console.log(value); // will print 'ff5500' in the console
...
```

### hexadecimal.toRGB

```javascript
import hexadecimal from 'hexadecimal-color';
...
const color = "#fff";
const value = hexadecimal.toRGB(color);
console.log(value); // will print [255, 255, 255] in the console
...
```

### hexadecimal.isColor

```javascript
import hexadecimal from 'hexadecimal-color';
...
const color = "#fff";
const value = hexadecimal.isColor(color);
console.log(value); // will print true in the console.
// Other values like "#12zr4c", "#aabb", "something", etc. will result false
...
```

## Authors

- [@aagarciga](https://www.github.com/aagarciga) Alex Alvarez Gárciga

## Badges

[![Language Typescript](https://img.shields.io/badge/language-typescript-blue)](https://www.typescriptlang.org/)

## Command history

This project was created as my first npm package using the commands below.

```
npm init
npm i -D typescript
tsc --init
npm link
npm run prepublish
npm i -D jest ts-jest @types/jest
npx ts-jest config:init
```
