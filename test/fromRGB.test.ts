import hexadecimalColor from "../src"

describe("hexadecimalColor.fromRGB", () => {
    test("0", () => {
        let result: any = hexadecimalColor.fromRGB([255, 255, 255])
        expect(result).toBe("#FFFFFF")
    })

    test("1", () => {
        let result: any = hexadecimalColor.fromRGB([0, 0, 0])
        expect(result).toBe("#000000")
    })

    test("2", () => {
        let result: any = hexadecimalColor.fromRGB([255, 0, 0])
        expect(result).toBe("#FF0000")
    })

    test("3", () => {
        const callFunction: any = () => {
            hexadecimalColor.fromRGB([255, 0])
        }
        expect(callFunction).toThrow("Value must hold RGB values separated in the first three elements of the collection.")
    })
})