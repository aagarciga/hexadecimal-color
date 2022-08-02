// export * from './functions';

import { contrast, expand, isColor, toRGB, unhash } from "./functions";

export const hexadecimal = {
    contrast: contrast,
    expand: expand,
    unhash: unhash,
    toRGB: toRGB,
    isColor: isColor
}

export default hexadecimal;