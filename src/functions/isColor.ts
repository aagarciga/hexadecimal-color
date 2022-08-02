import { unhash } from ".";

export const isColor = (value: string): boolean => {
    if (value.charAt(0) === '#') {
        value = unhash(value)
    }
    return /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(value);
}

export default isColor;