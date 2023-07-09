interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

const createEmployee = (salary: number|string): Director|Teacher => {
    if (typeof(salary) === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

const isDirector = (employee: Director|Teacher): boolean => {
    return employee instanceof Director;
}

const executeWork = (employee: Teacher|Director): string => {
    if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    } else if (employee instanceof Director){
        return employee.workDirectorTasks();
    }
}

type Subjects = "Math" | "History";

const teachClass = (todayClass: string): string => {
    if (todayClass === "Math") return "Teaching Math";
    return "Teaching History";
}


//Tests 5
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
//Task 6
const example = new Teacher();
console.log(new Teacher().workTeacherTasks());
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
//Task 7
console.log(teachClass('Math'));
console.log(teachClass('History'));

