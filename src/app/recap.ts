const username: string = 'juliocsantaman';
const username2: string | number = 22;
const add = (num1:number, num2:number): number => {
  return num1 + num2;
};

const result = add(5, 4); // 9.

class Person {

  // Properties or attributes.
  // public age: number;
  // public name: string;
  // public lastName: string;

  // constructor(age: number, name: string, lastName: string) {
  //   this.age = age;
  //   this.name = name;
  //   this.lastName = lastName;
  // }

  constructor(age: number, name: string, lastName: string) { }

}

const julio = new Person(22, 'Julio', 'Santaman');
