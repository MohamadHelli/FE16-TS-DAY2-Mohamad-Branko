class Cart{ 
    name : string; 
    age : Number; 
    jobTitle: string; 
    constructor(name: string, age: Number, jobTitle: string) { 
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printcart() { 
        return `Hello there, My name is  ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`; 
    }
}
let cart1 = new Cart("Mohamad", 29,"IT");
(document.getElementById("cart") as HTMLElement).innerHTML = cart1.printcart()

class Person extends Cart{
    salary : Number ;
    jobLocation : string;
    constructor(name:string, age: Number, jobTitle: string, salary : Number ,jobLocation : string ){
    super(name, age ,jobTitle );
    this.salary=salary;
    this.jobLocation =jobLocation ;
}
    printcart() { 
    return `Hello there, My name is  ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle} and I get ${this.salary} every month, and I work in ${this.jobLocation}`; 
    }
}
let person1 = new Person("Mohamad", 29 , "IT" , 2000, "Vienna");
(document.getElementById("cartnew") as HTMLElement).innerHTML = person1.printcart()

