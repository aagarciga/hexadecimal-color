import { hexadecimal } from "../src"

describe("hexadecimal.expand", () => {
    test("0", () => {
        let result: any = hexadecimal.expand("ccc")
        expect(result).toBe("cccccc")
    })

    test("1", () => {
        let result: any = hexadecimal.expand("abc")
        expect(result).toBe("aabbcc")
    })

    test("2", () => {
        let result: any = hexadecimal.expand("Abc")
        expect(result).toBe("AAbbcc")
    })

    test("3", () => {
        let result: any = hexadecimal.expand("")
        expect(result).toBe("")
    })
})