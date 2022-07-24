const square = require("./square");

describe("square", () => {

    //beforeEach - это функция, в которой можем проводить какие нибудь монипуляции. Вызываться она будет перед каждый тестом
    beforeEach(() => {

    });

    //beforeAll будет вызываться всего один раз
    beforeAll(() => {

    });

    test('Корректное значение', () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5);          //Здесь мы определяем что число, которое мы получили меньше чем 5 
        // expect(square(2)).toBeGreaterThan(3);       //Число больше чем 3
        // expect(square(2)).not.toBeUndefined();      //Данное значение не равно undefined
        const spyMathPow = jest.spyOn(Math, 'pow');    //Пример моков
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);      //Данный метод показывает, сколько раз была вызвана та или иная функция (В данном случае 1 раз)
    })

    test('Корректное значение', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);                                     //Если в функцию отправим 1, то тест упадёт, т.к. функция закончила свою роботу после успешного прохождения условия value === 1
        expect(spyMathPow).toBeCalledTimes(0);
    })

    //Точно такие же функции, но запускаются уже после тестов
    afterEach(() => {
        jest.clearAllMocks(); //Моки имеют свойство накапливаться, соответственно их нужно очищать
    });
    // afterAll();
})