console.log('Es6-class');
//class is similar to function
//class contains object declaration and method
//class name starts with uppercase
//this refers to the constructor in the class
class Person{
  constructor(name){
    this.personName = name;
  }
  display9(){
    return ('Name of the person is' + this.personName);
  }
}
//create an instance of personName
let person1 = new Person('David');
console.log(person1.display());

let person2 = new Person('Robert');
console.log(person2.display());

//inheritance
class Citizen extends Person{
  constructor(name,country){
    super(name);
    this.personCountry = country;
  }
  displayAll(){
    return (this.display() + 'and this person comes from ' + this.personCountry);
  }
}


//instance of Citizen
let person3 = new Citizen('Smith','Australia');
console.log(person3.displayAll());
