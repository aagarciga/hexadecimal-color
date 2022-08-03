// export * from './functions';

import { contrast, expand, fromRGB, isColor, toRGB, unhash } from "./functions";

/**
 * Hexadecimal values are base-16, so they are usually shorter than base-10 numbers. 
 * To specify 0 to 255 in hex, you'd use 00 to ff, saving a byte for higher colors.
 * RGB triplets can be abbreviated if each of the Red, Green, and Blue hex pairs are the same.
 */
export const hexadecimalColor = {
    contrast: contrast,
    expand: expand,
    unhash: unhash,
    toRGB: toRGB,
    fromRGB: fromRGB,
    isColor: isColor
}

/**
 * Alias for hexadeciamlColor
 */
export const hexColor = hexadecimalColor;

export default hexadecimalColor;