import hexadecimalColor from "../src"

describe("hexadecimalColor.unhash", () => {
    test("0", () => {
        let result: any = hexadecimalColor.unhash("#ccc")
        expect(result).toBe("ccc")
    })

    test("1", () => {
        let result: any = hexadecimalColor.unhash("#1AB394")
        expect(result).toBe("1AB394")
    })

    test("2", () => {
        let result: any = hexadecimalColor.unhash("##1AB394")
        expect(result).toBe("#1AB394")
    })

    test("3", () => {
        let result: any = hexadecimalColor.unhash("1AB394")
        expect(result).toBe("1AB394")
    })
})