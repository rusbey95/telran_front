// 1. Создать класс User со свойствами name, username и role.

// 2. Добавить метод change_role, который перед изменением роли проверяет, является ли указанное значение одним из массива ‘manager’, ‘admin’, ‘root’, ‘guest’.

// 3. Добавить свойство status, и метод change_status которое может принимать одно из предложенных значений online, offline, work

class User {
    static users = [];
    static validRoles = ['manager', 'admin', 'root', 'guest'];
    static validStatuses = ['online', 'offline', 'work'];

    constructor(name, username, role, status) {
        this.name = name;
        this.username = username;
        this.role = role;
        this.status = status;
        User.users.push(this);
    }

    get show_role() {
        return this.role;
    }
    set show_role(newRole) {
        if (User.validRoles.includes(newRole)) {
            this.role = newRole;
        } else {
            console.log('Not found this role');
        }
    }

    get show_status() {
        return this.status;
    }
    set show_status(newStatus) {
        if (User.validStatuses.includes(newStatus)) {
            this.status = newStatus;
        } else {
            console.log('Not found this status');
        }
    }
}


const user3 = new User('Ivan 3', 'ivannikov', 'admin', 'work');
const user4 = new User('Ivan 4', 'ivannikov', 'admin', 'work');
user4.show_status = 'offline'; // set
// console.log(user4.show_status); // get
// console.log(user4);






// getter / setter 
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get name() {
        return `${this.firstName} ${this.lastName}`;
    }
    set name(newName) {
        this.firstName = newName;
    }
}

const student = new Person('Joe', 'Jons');
// console.log(student.name);
student.name = 'Tom';
// console.log(student.name);




// 1) Создать класс Product со свойствами title, price, count.
// 2) Создать статическое свойство income, которое изначальное равно нулю.
// 3) Создать метод sale. Которое уменьшает count на единицу. Если count уже равен нулю, то вызывается исключение. Если продажа прошла, то статическое свойство income должно увеличиться на цену товара.
// 4) Создать статическое свойство items, которое хранит созданные экземпляры класса Product.
// 5) Добавить getter и setter для свойства price. При добавлении идет проверка, что цена больше 0.
class Product {
    static income = 0;
    static items = [];
    constructor(title, price, count) {
        this.title = title;
        this.price = price;
        this.count = count;
        Product.items.push(this);
    }

    sale() {
        try {
            if (this.count === 0) {
                throw new Error('Product not found')
            } else {
                this.count--;
                Product.income += this.price;
            }
        } catch (e) {
            console.error(e);
        }
    }

    get showPrice() {
        return `Product price is ${this.price} $`;
    }
    set showPrice(newPrice) {
        try {
            if (newPrice > 0) {
                this.price = newPrice;
            } else {
                throw new Error('Price in error')
            }
        } catch (e) {
            console.error(e);
        }
    }

}
const book = new Product('Book', 100, 1);
// console.log(book);
book.sale();
// console.log(book);
// console.log(Product.income);
// console.log(Product.items);
// console.log(book.showPrice);
book.changePrice = 100;
// console.log(book);



// 1) Создайте класс Book со свойствами title, author и yearPublished. Добавьте статическое свойство, где будут сохранены все экземпляры Book.  Добавьте статический метод listAuthors, который возвращает массив со  всеми именами авторов.
class Book {
    static books = [];
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        Book.books.push(this);
    }

    static listAuthors() {
        const authors = Book.books.map(elem => {
            return elem.author;
        });
        return authors;
    }
}
const shevchenko = new Book('Zapovit', 'Taras Shevchenko', '1845');
const kwitka = new Book('Marusja', 'Kwitka Osnowjanenko', '1832');

console.log(Book.listAuthors());
