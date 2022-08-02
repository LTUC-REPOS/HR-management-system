
// Object Keys
let keys = ["Employee ID", 'Full Name', "Department", "Level", 'Image URL', 'Salary'];


// Employees Data 
const employees =
    [
        "Ghazi Samer,Administration,Senior,https://www.pikpng.com/pngl/b/535-5356554_benefits-of-sales-quoting-software-for-small-business.png ",
        'Lana Ali,Finance,Senior,https://www.pikpng.com/pngl/b/535-5356554_benefits-of-sales-quoting-software-for-small-business.png ',
        'Tamara Ayoub,Marketing,Senior,https://www.pikpng.com/pngl/b/535-5356554_benefits-of-sales-quoting-software-for-small-business.png ',
        'Safi Walid,Administration,Mid-Senior,https://www.pikpng.com/pngl/b/535-5356554_benefits-of-sales-quoting-software-for-small-business.png ',
        'Omar Zaid,Development,Senior,https://www.pikpng.com/pngl/b/535-5356554_benefits-of-sales-quoting-software-for-small-business.png ',
        'Rana Saleh,Development,Junior,https://www.pikpng.com/pngl/b/535-5356554_benefits-of-sales-quoting-software-for-small-business.png ',
        'Hadi Ahmad,Finance,Mid-Senior,https://www.pikpng.com/pngl/b/535-5356554_benefits-of-sales-quoting-software-for-small-business.png '
    ];
// [ name , depart , lvl , url]

function CreateIDs() {
    let ids = [];
    for (let i = 1000; i < employees.length + 1000; i++) {
        ids.push(i);
        //ids.push(GetRandomNumber(1000,9999));
    }
    return ids;
}

let Ids = CreateIDs();

function GetRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Salary(lvl) {
    let salary = 0;
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
    return salary * (1 - 0.075);
}

function CreateObjects(keys, data) {
    let temporaryObj = {};
    let objects = [];

    // data : [0] Full name   [1] Department     [2]  Level   [3] Image URl

    let info = [];
    for (let i = 0; i < data.length; i++) {  // Outer Loop to Get Each Employeee
        
        //          ID        FUll Name               Department            Level            Image URl              Salaray
        info = [Ids[i], data[i].split(',')[0], data[i].split(',')[1], data[i].split(',')[2], data[i].split(',')[3], Salary(data[i].split(',')[2])];
        
        for (let j = 0; j < info.length; j++) { // Inner Loop to fill each object
            temporaryObj[keys[j]] = info[j];
        }
        objects.push(temporaryObj);
        temporaryObj = {};  // Refresh Address
    }
    return objects;
}

let objects = CreateObjects(keys, employees);
//console.log(objects);
for (let employee of objects) {

    console.log("Employee name: " + employee['Full Name'] + "\n");
    console.log("Employee salary: " + employee['Salary'] + "\n");
    console.log("===============================================");
}

