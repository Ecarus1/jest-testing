const mapArrToString = require("./mapArrToString");

describe("mapArrToString", () => {        //Если нам необходимо описать несколько сценариев, то все тесты необходимо обернуть в эту функцию
    test("Коррекстное значение", () => {
        expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);         //Для того чтобы сравнить содержимое, нужмно использовать метод .toEqual
    })

    test("Мешанина", () => {
        expect(mapArrToString([1, 2, 3, null, undefined, "HelloWorld"])).toEqual(['1', '2', '3']);
    })

    test("Пустой массив", () => {
        expect(mapArrToString([])).toEqual([]);
    })

    test("Отрицание", () => {
        expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);        //Показываем что не равно
    })
})
