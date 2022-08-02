import { toRGB } from ".";

export const contrast = (value: string): 'dark' | 'light' => {
    const [r, g, b] = toRGB(value);

    const result = Math.round(((r * 299) + (g * 587) + (b * 114)) / 1000);
    return result <= 180 ? 'dark' : 'light';
}

export default contrast;