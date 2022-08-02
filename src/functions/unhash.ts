export const unhash = (value: string) => {
    let result = value.split('');
    result.shift();
    return result.join('')
}

export default unhash;