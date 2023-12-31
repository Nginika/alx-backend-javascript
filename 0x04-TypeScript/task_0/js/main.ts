interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "John",
    lastName: "Sullivan",
    age: 19,
    location: "California",
}

let student2: Student = {
    firstName: "Sarah",
    lastName: "Abraham",
    age: 21,
    location: "San Jose",
}

let studentsList: Student[] = [student1, student2];
//console.log(studentsList);
let studentTable = document.createElement("table");

//loop through students list
studentsList.forEach(student => {
    //create new row
    let row = document.createElement("tr");

    let fname = document.createElement("td");
    fname.textContent = student.firstName;

    let locatn = document.createElement("td");
    locatn.textContent = student.location;

    //append cells to row
    row.appendChild(fname);
    row.appendChild(locatn);
    
    //append row to table body
    studentTable.appendChild(row);
});

document.body.appendChild(studentTable);