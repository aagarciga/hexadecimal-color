import hexadecimal from "../src"

describe("hexadecimal.unhash", () => {
    test("0", () => {
        let result: any = hexadecimal.unhash("#ccc")
        expect(result).toBe("ccc")
    })

    test("1", () => {
        let result: any = hexadecimal.unhash("#1AB394")
        expect(result).toBe("1AB394")
    })

    test("2", () => {
        let result: any = hexadecimal.unhash("##1AB394")
        expect(result).toBe("#1AB394")
    })
})