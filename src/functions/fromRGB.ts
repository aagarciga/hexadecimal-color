import { expand } from ".";

/**
 * Returns the Hexadecimal CSS 6-character RRGGBB CSS color sharp '#' prefixed value from a collection of the numeric values corresponding to the RGB color representation. 
 * @param value number[] Collection of numeric (0-255) values corresponding to RGB color representation.
 * @returns string
 */
const fromRGBA = (value: number[]) => {
    if (value.length < 3) {
        throw new Error("Value must hold RGB values separated in the first three elements of the collection.");
    }
    const [r, g, b] = value;
    let hexR = r.toString(16).toLocaleUpperCase(),
        hexG = g.toString(16).toLocaleUpperCase(),
        hexB = b.toString(16).toLocaleUpperCase();

    hexR = hexR.length === 1 ? expand(hexR) : hexR;
    hexG = hexG.length === 1 ? expand(hexG) : hexG;
    hexB = hexB.length === 1 ? expand(hexB) : hexB;

    return `#${hexR}${hexG}${hexB}`;
}

export default fromRGBA