import { hexadecimal } from "../src"

describe("hexadecimal.toRGB", () => {
    test("1", () => {
        let result: any = hexadecimal.toRGB("fff")
        expect(result).toEqual([255, 255, 255])
    })

    test("4", () => {
        let result: any = hexadecimal.toRGB('#fff')
        expect(result).toEqual([255, 255, 255])
    })

    test("5", () => {
        let result: any = hexadecimal.toRGB('#ffffff')
        expect(result).toEqual([255, 255, 255])
    })

    test("3", () => {
        let callFunction: any = () => {
            hexadecimal.toRGB('@fff')
        }

        expect(callFunction).toThrow('Value is not a correct hexadecimal color value.')
    })

    test("4", () => {
        let callFunction: any = () => {
            hexadecimal.toRGB('ffff')
        }

        expect(callFunction).toThrow('Value is not a correct hexadecimal color value.')
    })

    test("5", () => {
        let callFunction: any = () => {
            hexadecimal.toRGB('ZPQ')
        }

        expect(callFunction).toThrow('Value is not a correct hexadecimal color value.')
    })
})