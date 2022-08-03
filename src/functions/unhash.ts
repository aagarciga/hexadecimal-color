/**
 * Returns the hexadecimal CSS value formated as 6-character RRGGBB or 3-character RGB shorthand without the sharp '#' character in front
 * @param value string Hexadecimal CSS color value
 * @returns string
 */
const unhash = (value: string) => {
    if (value.charAt(0) === '#') {
        const result = value.split('');
        result.shift();
        return result.join('')
    }
    return value;
}

export default unhash;