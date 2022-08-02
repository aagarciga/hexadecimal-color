import { unhash, expand, isColor } from ".";


export const toRGB = (value: string): number[] => {
    if (value.charAt(0) === '#') {
        value = unhash(value)
    }
    if (value.length === 3) {
        value = expand(value)
    }

    if (value.length < 3 || value.length > 3 && value.length < 6 || value.length > 6) {
        throw new Error("Value is not a correct hexadecimal color value.");
    }

    if (!isColor(value)) {
        throw new Error("Value is not a correct hexadecimal color value.");
    }
    const parsed = parseInt(value, 16);
    const r = (parsed >> 16) & 255;
    const g = (parsed >> 8) & 255;
    const b = parsed & 255;

    return [r, g, b];
}

export default toRGB;