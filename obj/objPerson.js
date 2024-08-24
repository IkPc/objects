const person = {
    name: 'Jonas',
    age: 23,
    work: 'Beginner',
    theme: 'Bright',
}

let person1 = {...person};

person1.name = 'João';
person1.age = 18;
person1.work = 'Professional';
person1.theme = 'Dark';
person1.dog = {
    dogName: 'cupcake',
    dogAge: 5,
}

let person2 = {...person};

person2.name = 'Gomes';
person2.age = 33;
person2.work = 'Professional';
person2.theme = 'Bright';
person2.dog = {
    dogName: 'cupcake2',
    dogAge: 3,
}

console.table(person1.dog)