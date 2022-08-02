export const expand = (value: string) => {
    return value
        .split('')
        .reduce<string[]>((s, c) => s.concat([c, c]), [])
        .join('')
}

export default expand;