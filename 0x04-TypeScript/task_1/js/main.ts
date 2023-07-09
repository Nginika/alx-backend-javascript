interface Teacherint {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

class Teacher implements Teacherint {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullTimeEmployee = true;
      this.location = "Unknown";
    }
  }
  
  interface Directors extends Teacherint {
    numberOfReports: number;
  }

  interface printTeacherFunction {
    firstName: string;
    lastName: string;
    printTeacher(firstName: string, lastName: string) : string;
  }

  class TeacherPrint implements printTeacherFunction {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    printTeacher(firstName: string, lastName: string): string {
        return `${firstName[0]}. ${lastName}`;
    }
  }

interface student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(firstName: string): string;
}

class StudentClass implements student {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.workOnHomework();
        this.displayName();
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}

 //Tests 1
 const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
console.log(teacher3);
// task 2
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
console.log(director1);
//task 3
const printer = new TeacherPrint("John", "Doe");
console.log(printer.printTeacher("John", "Doe"));
//task 4
const student1 = new StudentClass("Flora", "Maide");
console.log(student1.workOnHomework());
console.log(student1);
console.log(student1.displayName());

