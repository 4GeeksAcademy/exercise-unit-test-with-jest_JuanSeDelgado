const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('../app.js')


describe('Conversions', () => {
    test("Euro to dollars", function () {
        // Uso la función como debe ser usada
        const dollars = fromEuroToDollar(3.5);

        // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
        const expected = 3.5 * 1.07;


        // Hago mi comparación (la prueba)
        expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    })

    test("Dollar to yen", () => {

        const yens = fromDollarToYen(3.5);

        const expected = 3.5*156.5;

        expect(fromDollarToYen(3.5)).toBe(547.75);
    })

    test("Yen to pound", () => {

        const pound = fromYenToPound(3.5);

        const expected = 3.5*0.87;

        expect(fromYenToPound(3.5)).toBe(3.045);
    })
})

test('Suma', () => {

    expect(sum(7, 3)).toBe(10)
}
)

test("One euro should be 1.07 dollars", function () {

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})