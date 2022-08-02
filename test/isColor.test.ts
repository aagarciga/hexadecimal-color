import hexadecimal from "../src"

describe("hexadecimal.isColor", () => {
    test("0", () => {
        let result: any = hexadecimal.isColor("ccc")
        expect(result).toBe(true)
    })

    test("1", () => {
        let result: any = hexadecimal.isColor("#ccc")
        expect(result).toBe(true)
    })

    test("2", () => {
        let result: any = hexadecimal.isColor("#cccccc")
        expect(result).toBe(true)
    })

    test("3", () => {
        let result: any = hexadecimal.isColor("#AaBbCc")
        expect(result).toBe(true)
    })

    test("4", () => {
        let result: any = hexadecimal.isColor("#abc")
        expect(result).toBe(true)
    })

    test("5", () => {
        let result: any = hexadecimal.isColor("#aabb")
        expect(result).toBe(false)
    })

    test("6", () => {
        let result: any = hexadecimal.isColor("#")
        expect(result).toBe(false)
    })

    test("7", () => {
        let result: any = hexadecimal.isColor("#12zr4c")
        expect(result).toBe(false)
    })

    test("8", () => {
        let result: any = hexadecimal.isColor("##cccccc")
        expect(result).toBe(false)
    })

    test("9", () => {
        let result: any = hexadecimal.isColor("something")
        expect(result).toBe(false)
    })

    test("10", () => {
        let result: any = hexadecimal.isColor("fff")
        expect(result).toBe(true)
    })

    test("11", () => {
        let result: any = hexadecimal.isColor("#fff")
        expect(result).toBe(true)
    })

    test("12", () => {
        let result: any = hexadecimal.isColor("#ffffff")
        expect(result).toBe(true)
    })

    test("13", () => {
        let result: any = hexadecimal.isColor("000")
        expect(result).toBe(true)
    })

    test("14", () => {
        let result: any = hexadecimal.isColor("#000")
        expect(result).toBe(true)
    })

    test("15", () => {
        let result: any = hexadecimal.isColor("#000000")
        expect(result).toBe(true)
    })
})