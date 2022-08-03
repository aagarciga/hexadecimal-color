import { unhash } from ".";

/**
 * Returns true if the given hexadecimal CSS color value is a valid 6-character RRGGBB CSS color or 3-character RGB shorthand
 * @param value string Hexadecimal CSS color value
 * @returns boolean
 */
export const isColor = (value: string): boolean => {
    if (value.charAt(0) === '#') {
        value = unhash(value)
    }
    return /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(value);
}

export default isColor;