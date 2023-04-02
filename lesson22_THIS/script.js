// const obj1 = {
//     value: 1,
//     myFunc: function myFunc(num) {
//         this.value *= num;
//     }
// }
// const obj2 = {
//     value: 2,
// }
// obj1.myFunc.call(obj2, 4);
// obj1.myFunc.apply(obj2, [4])
// console.log(obj2);


// Создайте класс Vehicle со свойствами make, model и year. Добавьте статический метод isAntique, который принимает экземпляр Vehicle и возвращает true, если свойство year имеет возраст более 25 лет, и false в противном случае.

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    static isAntique(obj) {
        let currentYeat = new Date().getFullYear();
        let age = currentYeat - obj.year;
        return age > 25;
    }
}
const audi = new Vehicle('Audi', 100, 1990);
console.log(Vehicle.isAntique(audi));