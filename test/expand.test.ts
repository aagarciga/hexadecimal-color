import { hexadecimalColor } from "../src"

describe("hexadecimalColor.expand", () => {
    test("0", () => {
        let result: any = hexadecimalColor.expand("ccc")
        expect(result).toBe("cccccc")
    })

    test("1", () => {
        let result: any = hexadecimalColor.expand("abc")
        expect(result).toBe("aabbcc")
    })

    test("2", () => {
        let result: any = hexadecimalColor.expand("Abc")
        expect(result).toBe("AAbbcc")
    })

    test("3", () => {
        let result: any = hexadecimalColor.expand("")
        expect(result).toBe("")
    })

    test("4", () => {
        let result: any = hexadecimalColor.expand("f00")
        expect(result).toBe("ff0000")
    })
})