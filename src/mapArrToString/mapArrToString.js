const mapArrToString = (arr) => {
    return (
        arr
            .filter(item => Number.isInteger(item))         //фильтруем наш массив и оставляем только числа
            .map(String)                                    //Далее все числа переводим в строку
    )
}

module.exports = mapArrToString;