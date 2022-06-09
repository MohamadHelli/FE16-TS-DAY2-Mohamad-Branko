"use strict";
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printperson() {
        return `Hello there, My name is  ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
let cart1 = new Person("Mohamad", 29, "IT");
document.getElementById("cart").innerHTML = cart1.printperson();
class Person1 extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printperson() {
        return `Hello there, My name is  ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}
let person1 = new Person1("Mohamad", 29, "IT", 2000, "Vienna");
document.getElementById("cartnew").innerHTML = person1.printperson();
