// class Dog {
//     addName(name) {
//         // console.log('Name');
//         this.name = name;
//     }
// }

// const dog_1 = new Dog();
// const dog_2 = new Dog();

// // dog_1.name = 'Rex';
// // dog_2.name = 'Sharik';

// // console.log(dog_1);

// // dog_1.addName();
// dog_2.addName('Pol')
// console.log(dog_2)


// class Dog {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     bark(gaw) {
//         this.dogsBark = gaw;
//     }
// }

// const dog_1 = new Dog('Rex', 10);
// dog_1.bark('gaw');
// console.log(dog_1);





// Создать класс User со свойствами name, username, age.
class User {
    constructor(name, username, age) {
        this.name = name;
        this.username = username;
        this.age = age;
    }

    // Добавить метод b_day которое увеличивает возраст на единицу.
    b_day() {
        this.age++;
    }

    // Добавить метод change_username, который получает в качестве аргумента новое имя пользователя и меняет его.
    change_username(newUsername) {
        this.username = newUsername;
    }
}

const user = new User('Vasya', 'Ivanko', 18);
user.b_day();
user.change_username('Testoviy');

// console.log(user);

// Создать класс Product со свойствами title, price, count. И методами change_price и sale.
// Метод change_price принимает аргумент new_price и устанавливает свойство price в это новое значение.

// Метод sale принимает аргумент discount_percent, рассчитывает скидку на основе этого процента и вычитает ее из свойства price.

// Доработать метод change_price, который принимает в качестве аргумента новую цену и делает проверку, если цена меньше нуля то цена не меняется и вызывается исключение “цена не может быть отрицательной”.

// Доработать класс метод sale, который уменьшает count на единицу. Но если count уже равен нулю, то вызывается исключение “товар закончился”.

class Product {
    constructor(title, price, count) {
        this.title = title;
        this.price = price;
        this.count = count;
    }
    change_price(new_price) {
        try {
            if (new_price < 0) {
                throw new Error('цена не может быть отрицательной');
            } else {
                this.price = new_price;
            }
        } catch (e) {
            console.log(e);
        }
    }
    sale(discount_percent) {
        const discount = discount_percent * this.price / 100
        this.price -= discount;
    }
    change_count() {
        try {
            if (this.count <= 1) {
                throw new Error('товар закончился');
            } else {
                this.count--;
            }
        } catch (e) {
            console.log(e);
        }
    }
}

const book = new Product("Book", 100, 2);
// console.log(book);
book.change_price(200);
// console.log(book);
book.sale(20);
// console.log(book);
book.change_count();
// console.log(book);

// Создайте класс с именем Triangle, который имеет свойства a, b и c, представляющие длины сторон треугольника. Класс должен иметь метод getPerimeter который вычисляют периметр. Класс также должен использовать блоки try-catch для обработки ошибок при создании нового экземпляра класса, выбрасывая ошибку, если значения a, b и c не являются допустимыми числами.

class Triangle {
    constructor(a, b, c) {
        try {
            if (typeof a === 'number' && a > 0) {
                this.a = a;
            } else {
                throw new Error('a недопустимое цифры');
            }
            if (typeof b === 'number' && b > 0) {
                this.b = b;
            } else {
                throw new Error('b недопустимое цифры');
            }
            if (typeof c === 'number' && c > 0) {
                this.c = c;
            } else {
                throw new Error('c недопустимое цифры');
            }
        } catch (e) {
            console.log(e);
        }
    }
    getPerimeter() {
        const perimeter = this.a + this.b + this.c;
        // console.log(perimeter);
    }
}

const triangle = new Triangle(1, 2, 4);
triangle.getPerimeter();
// console.log(triangle);

// Создайте класс BankAccount со свойствами balance и accountNumber. Добавьте в класс методы, позволяющие пользователю вносить деньги на счет, снимать деньги со счета и проверять баланс счета.
class BankAccount {
    constructor(balance, accountNumber) {
        this.balance = balance
        this.accountNumber = accountNumber
    };
    put(putMoney) {
        this.balance += putMoney;
    };
    get(getMoney) {
        try {
            if (getMoney <= this.balance) {
                this.balance -= getMoney;
            } else {
                throw new Error("Нехватает средств")
            }
        } catch (e) {
            console.log(e);
        }
    };
    check() {
        console.log(`На вашем балансе: ${this.balance}`);
    };
}
const bankAccount = new BankAccount(0, 3)
// bankAccount.put(1001)
// bankAccount.check()
// bankAccount.get(5000)
// bankAccount.check()


// Создайте класс Student со свойствами name, age, email и grades, а также методы addGrade и getAverageGrade. Метод addGrade должен принимать оценку и добавлять ее в массив grades, если оценка является числом от 0 до 100. Если оценка не является числом или находится вне диапазона 0-100, метод должен выдать ошибку. Метод getAverageGrade должен вычислить средний балл всех оценок в массиве grades и вернуть его.

class Student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.grades = [];
    }
    addGrade(newGrade) {
        try {
            if (typeof newGrade === 'number' || newGrade > 0 || newGrade < 100) {
                this.grades.push(newGrade);
            } else {
                throw new Error('Это не число или вне диапазона');
            }
        } catch (e) {
            console.log(e);
        }
    }
    getAverageGrade() {
        const sum = this.grades.reduce((acc, cur) => acc + cur);
        const average = sum / this.grades.length;
        console.log(Math.round(average));
    }
}
const student = new Student('Vasya', 16, 'test@gmail.com');
// student.addGrade(4);
// console.log(student);
// student.addGrade(5);
// console.log(student);
// student.addGrade(2);
// student.getAverageGrade();
// console.log(student);

// Создайте класс ShoppingCart, который имеет свойства items и totalPrice, а также методы addItem и removeItem. Метод addItem должен добавлять товар в корзину и обновлять общую цену, а метод removeItem должен удалять товар из корзины и обновлять общую цену. Оба метода должны выдавать ошибку, если переданный аргумент не является допустимым объектом со свойствами name и price.

class ShoppingCart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }
    addItem(product) {
        try {
            if (typeof product === "object" && product.hasOwnProperty("name") && product.hasOwnProperty("price")) {
                this.items.push(product);
                this.totalPrice += product.price;
            } else {
                throw new Error("не является допустимым объектом");
            }
        } catch (e) {
            console.log(e);
        }
    }
    removeItem(product) {
        try {
            if (typeof product === "object" && product.hasOwnProperty("name") && product.hasOwnProperty("price")) {
                const index = this.items.findIndex(i => i.name === product.name && i.price === product.price);
                if (index != -1) {
                    this.items.splice(index, 1);
                    this.totalPrice -= product.price;
                }
            } else {
                throw new Error("не является допустимым объектом");
            }
        } catch (e) {
            console.log(e);
        }
    }
}