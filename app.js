
// // Object Keys
// let keys = ["Employee ID", 'Full Name', "Department", "Level", 'Image URL', 'Salary'];


// // Employees Data 
// const employees =
//     [
//         "Ghazi Samer,Administration,Senior,./assests/ ",
//         'Lana Ali,Finance,Senior,./assests/ ',
//         'Tamara Ayoub,Marketing,Senior,./assests/ ',
//         'Safi Walid,Administration,Mid-Senior,./assests/ ',
//         'Omar Zaid,Development,Senior,./assests/ ',
//         'Rana Saleh,Development,Junior,./assests/ ',
//         'Hadi Ahmad,Finance,Mid-Senior,./assests/ '
//     ];
// // [ name , depart , lvl , url]

// function CreateIDs() {
//     let ids = [];
//     for (let i = 1000; i < employees.length + 1000; i++) {
//         ids.push(i);
//         //ids.push(GetRandomNumber(1000,9999));
//     }
//     return ids;
// }

// let Ids = CreateIDs();

// function GetRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function Salary(lvl) {
//     let salary = 0;
//     switch (lvl) {
//         case 'Senior':
//             salary = GetRandomNumber(1500, 2000);
//             break;
//         case 'Mid-Senior':
//             salary = GetRandomNumber(1000, 1500);
//             break;
//         default:
//             salary = GetRandomNumber(500, 1000);
//     }
//     return salary * (1 - 0.075);
// }

// function CreateObjects(keys, data) {
//     let temporaryObj = {};
//     let objects = [];

//     // data : [0] Full name   [1] Department     [2]  Level   [3] Image URl

//     let info = [];
//     for (let i = 0; i < data.length; i++) {  // Outer Loop to Get Each Employeee

//         //          ID        FUll Name               Department            Level            Image URl              Salaray
//         info = [Ids[i], data[i].split(',')[0], data[i].split(',')[1], data[i].split(',')[2], data[i].split(',')[3], Salary(data[i].split(',')[2])];

//         for (let j = 0; j < info.length; j++) { // Inner Loop to fill each object
//             temporaryObj[keys[j]] = info[j];
//         }
//         objects.push(temporaryObj);
//         temporaryObj = {};  // Refresh Address
//     }
//     return objects;
// }

// let objects = CreateObjects(keys, employees);
// //console.log(objects);
// for (let employee of objects) {

//     console.log("Employee name: " + employee['Full Name'] + "\n");
//     console.log("Employee salary: " + employee['Salary'] + "\n");
//     console.log("===============================================");
// }

/***************  Task 9 **********************/

function GetRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CreateIDs() {
    let ids = [];
    for (let i = 1000; i < 1100; i++) {
        ids.push(i);
        //ids.push(GetRandomNumber(1000,9999));
    }
    return ids;
}
let IDArray = CreateIDs();

function Employee(EmployeeName, Department, Level, ImageUrl) {
    this.EmployeeID = null;
    this.EmployeeName = EmployeeName;
    this.Department = Department;
    this.Level = Level;
    this.ImageUrl = ImageUrl;
    this.Salary = null;

    this.getID = function () {
        this.EmployeeID = IDArray.shift();
    }

    this.getSalary = function () {
        let salary = 0;
        let lvl = this.Level;
        switch (lvl) {
            case 'Senior':
                salary = GetRandomNumber(1500, 2000);
                break;
            case 'Mid-Senior':
                salary = GetRandomNumber(1000, 1500);
                break;
            default:
                salary = GetRandomNumber(500, 1000);
        }
        this.Salary = (salary * (1 - 0.075)).toPrecision(5);
    }


}


Employee.prototype.InitliazeData = function () {

    this.getID();
    this.getSalary();

    // document.write(`Employee name: ${this.EmployeeName} <br>`);
    // document.write(`Department: ${this.Department}<br>`);
    // document.write(`$Employee salary: ${this.Salary}<br><br>`);

}

let ArrayEmployees =
    [
        new Employee("Ghazi Samer", "Administration", "Senior", "./assests/Ghazi.jpg"),
        new Employee('Lana Ali', 'Finance', 'Senior', './assests/Lana.jpg '),
        new Employee('Tamara Ayoub', 'Marketing', 'Senior', './assests/Tamara.jpg '),
        new Employee('Safi Walid', 'Administration', 'Mid-Senior', './assests/Safi.jpg '),
        new Employee('Omar Zaid', 'Development', 'Senior', './assests/Omar.jpg '),
        new Employee('Rana Saleh', 'Development', 'Junior', './assests/Rana.jpg '),
        new Employee('Lana Ali', 'Finance', 'Senior', './assests/Lana.jpg '),
        new Employee('Tamara Ayoub', 'Marketing', 'Senior', './assests/Tamara.jpg '),
        new Employee('Omar Zaid', 'Development', 'Senior', './assests/Omar.jpg '),
        new Employee('Rana Saleh', 'Development', 'Junior', './assests/Rana.jpg '),
        new Employee('Tamara Ayoub', 'Marketing', 'Senior', './assests/Tamara.jpg '),
        new Employee('Safi Walid', 'Administration', 'Mid-Senior', './assests/Safi.jpg '),
        new Employee('Rana Saleh', 'Development', 'Junior', './assests/Rana.jpg '),
        new Employee('Lana Ali', 'Finance', 'Senior', './assests/Lana.jpg '),
        new Employee('Tamara Ayoub', 'Marketing', 'Senior', './assests/Tamara.jpg '),
        new Employee('Omar Zaid', 'Development', 'Senior', './assests/Omar.jpg '),
        new Employee('Rana Saleh', 'Development', 'Junior', './assests/Rana.jpg '),
        new Employee('Tamara Ayoub', 'Marketing', 'Senior', './assests/Tamara.jpg '),
        new Employee('Omar Zaid', 'Development', 'Senior', './assests/Omar.jpg '),
        new Employee('Rana Saleh', 'Development', 'Junior', './assests/Rana.jpg '),
        new Employee('Tamara Ayoub', 'Marketing', 'Senior', './assests/Tamara.jpg '),
        new Employee('Safi Walid', 'Administration', 'Mid-Senior', './assests/Safi.jpg '),
        new Employee('Rana Saleh', 'Development', 'Junior', './assests/Rana.jpg '),
        new Employee('Lana Ali', 'Finance', 'Senior', './assests/Lana.jpg '),
        new Employee('Tamara Ayoub', 'Marketing', 'Senior', './assests/Tamara.jpg '),
        new Employee('Omar Zaid', 'Development', 'Senior', './assests/Omar.jpg '),
        new Employee('Rana Saleh', 'Development', 'Junior', './assests/Rana.jpg '),
        new Employee('Omar Zaid', 'Development', 'Senior', './assests/Omar.jpg '),
        new Employee('Rana Saleh', 'Development', 'Junior', './assests/Rana.jpg '),
        new Employee('Tamara Ayoub', 'Marketing', 'Senior', './assests/Tamara.jpg '),
        new Employee('Safi Walid', 'Administration', 'Mid-Senior', './assests/Safi.jpg '),
        new Employee('Rana Saleh', 'Development', 'Junior', './assests/Rana.jpg '),
        new Employee('Lana Ali', 'Finance', 'Senior', './assests/Lana.jpg '),
        new Employee('Tamara Ayoub', 'Marketing', 'Senior', './assests/Tamara.jpg '),
        new Employee('Omar Zaid', 'Development', 'Senior', './assests/Omar.jpg '),
        new Employee('Rana Saleh', 'Development', 'Junior', './assests/Rana.jpg '),

        
        new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', './assests/Hadi.jpg')
    ];


    for (const employee of ArrayEmployees) {

        employee.InitliazeData();
       
    }
    

/*******************  Task 10  ***********************/
RenderCards();
function RenderCards() {

    // Main Conatiner to hold all rows
    let container = document.getElementById('Container');     
    
    
    let numberOfEmployessInRows = 3;
    let numberOfEmployess =  ArrayEmployees.length;
    let numberRequirdRows = Math.ceil(numberOfEmployess /numberOfEmployessInRows);


    //Creating Required Rows 
    let rows = [];
    for (let i = 0; i < numberRequirdRows; i++) {
        let  row =  document.createElement('div');
            row.classList.add("employeeContainer");

            rows.push(row);
            

    }

    // Appending Rows to the Main Conatiner
    for (const row of rows) {
        container.append(row);
    }

    

    let Rows = document.getElementsByClassName('employeeContainer');
     
    let counter =0; // Saving the current employee count 
    for (const row of Rows) {  // Looping over rows
             
        for (let i = 0 ; i < numberOfEmployessInRows;  i++) { // Appending Cards to Rows

            let currentEmployee = ArrayEmployees[counter];

            let card = document.createElement('div'); // Card container
            card.classList.add("employeeDiv");             
            
     
            let img = document.createElement('img');
            img.src = currentEmployee.ImageUrl;
            img.width = 250;
     
            let id = document.createElement('label');
            id.textContent = `Employee ID : ${currentEmployee.EmployeeID}`;
     
            let fullName = document.createElement('label');
            fullName.textContent = `Full Name : ${currentEmployee.EmployeeName}`;
     
            let department = document.createElement('label');
            department.textContent = `Department : ${currentEmployee.Department}`;
     
            let level = document.createElement('label');
            level.textContent = `Level : ${currentEmployee.Level}`;
     
            let salary = document.createElement('label');
            salary.textContent = `Salary: ${currentEmployee.Salary}`;
     
            card.append(img,id,fullName,department,level,salary);

            row.append(card);
            counter++;


         }
       
    }


    console.log(container);
}

