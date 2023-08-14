class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(name, salary, hireDate, descriptionOfJob) {
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription() {
        console.log(`${this.name} was hired on ${this.hireDate} and makes ${this.salary} because ${this.descriptionOfJob}`);
    }
}

class Designer extends Employee {
    constructor(name, salary, hireDate, experience) {
        super(name, salary, hireDate);
        this.experience = experience;
    }
    yearsExperience() {
        console.log(`${this.name} was hired on ${this.hireDate} and makes ${this.salary} because they have ${this.experience} years of experience`);
    }
}

class SalesAssociate extends Employee {
    constructor(name, salary, hireDate, degrees) {
        super(name, salary, hireDate);
        this.degrees = degrees;
    }
    degreeCompleted() {
        console.log(`${this.name} was hired on ${this.hireDate} and makes ${this.salary} because they have completed a degree in ${this.degrees}`);
    }
}

let manager = new Manager("Donna", 80000, "3/22/17", "she manages the sales staff");
let designer = new Designer("Alex", 60000, "5/10/20", 5);
let salesAssociate = new SalesAssociate("Michael", 45000, "8/5/19", "Marketing");

manager.jobDescription();
designer.yearsExperience();
salesAssociate.degreeCompleted();