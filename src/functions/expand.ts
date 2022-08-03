/**
 * Converts 3-character RGB shorthand into 6-character RRGGBB CSS color
 * @param value string 3-character RGB shorthand CSS color value
 * @returns 6-character RRGGBB CSS color
 */
export const expand = (value: string) => {
    return value
        .split('')
        .reduce<string[]>((s, c) => s.concat([c, c]), [])
        .join('')
}

export default expand;