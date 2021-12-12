$(document).ready(readyNow);

function readyNow() {
    console.log('in readyNow');
    $(document).on('submit', newEmployee);
}

function onNewEmployee(event) {
    event.preventDefault();
}

let employeeInfo = [];

function newEmployee(event) {
    event.preventDefault();
    let first = $('#firstNameInput').val();
    let last = $('#lastNameInput').val();
    let ID = Number($('#IDNumberInput').val());
    let title = $('#jobTitleInput').val();
    let salary = Number($('#annualSalaryInput').val());
    console.log(first, last, ID, title, salary);
    addNewEmployee(first, last, ID, title, salary);
    clear();
}

function addNewEmployee(nombre, apellio, identificacion, posicion, salario) {
    employee = {
        firstName: nombre, 
        lastName: apellio, 
        ID: identificacion, 
        title: posicion, 
        salary: salario
    };
    employeeInfo.push(employee);
    return true;
}

function clear() {
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#IDNumberInput').val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val('');
}
