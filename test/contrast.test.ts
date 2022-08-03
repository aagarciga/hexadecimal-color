import hexadecimalColor from "../src"


describe("hexadecimalColor.contrast", () => {
    test("0", () => {
        let result: any = hexadecimalColor.contrast("#1AB394")
        expect(result).toBe("dark")
    })

    test("1", () => {
        let result: any = hexadecimalColor.contrast("fff")
        expect(result).toBe("light")
    })

    test("2", () => {
        let result: any = hexadecimalColor.contrast("000")
        expect(result).toBe("dark")
    })

    test("3", () => {
        let result: any = hexadecimalColor.contrast('#2ecc71')
        expect(result).toBe("dark")
    })

    test("4", () => {
        let result: any = hexadecimalColor.contrast('#3498db')
        expect(result).toBe("dark")
    })

    test("5", () => {
        let result: any = hexadecimalColor.contrast('#8e44ad')
        expect(result).toBe("dark")
    })

    test("6", () => {
        let result: any = hexadecimalColor.contrast('#e67e22')
        expect(result).toBe("dark")
    })

    test("7", () => {
        let result: any = hexadecimalColor.contrast('#1abc9c')
        expect(result).toBe("dark")
    })
})