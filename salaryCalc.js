$(document).ready(readyNow);

function readyNow() {
    console.log('in readyNow');
    $(document).on('submit', newEmployee);
    $(document).on('click', '.deleteButton', onDeleteEmployee);
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


    $('#employeeList').empty();


    for (let employee of employeeInfo) {
        $('#employeeList').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.IDNumber}</td>
                <td>${employee.title}</td>
                <td>${employee.salary}</td>
                <td>
                    <button class="deleteButton">
                        Delete
                    </button>
                </td>
            </tr>
        `)
    }
}

function addNewEmployee(nombre, apellio, identificacion, posicion, salario) {
    employee = {
        firstName: nombre, 
        lastName: apellio, 
        IDNumber: identificacion, 
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

function onDeleteEmployee() {
    console.log('in onDeleteEmployee');
    $(this).parents('tr').remove();
}