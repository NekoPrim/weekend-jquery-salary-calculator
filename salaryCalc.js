$(document).ready(readyNow);

function readyNow() {
    console.log('in readyNow');
    $(document).on('submit', newEmployee);
    $(document).on('click', '.deleteButton', onDeleteEmployee);
    $('#firstRow').css({'background-color': 'lightskyblue'})
}

let employeeInfo = [];

function newEmployee(event) {

    event.preventDefault();

    let first = $('#firstNameInput').val();
    let last = $('#lastNameInput').val();
    let ID = $('#IDNumberInput').val();
    let title = $('#jobTitleInput').val();
    let salary = $('#annualSalaryInput').val();
    console.log(first, last, ID, title, salary);


    addNewEmployee(first, last, ID, title, salary);
    clear();

    $('#total').empty();

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

    let totalAnnualSalary = 0;
    for (let employee of employeeInfo) {
        totalAnnualSalary += Number(employee.salary);
    }
    let totalMonthly = totalAnnualSalary/12;
    let monthly = totalMonthly.toFixed(2);
    $('#total').append('Total Monthly:', monthly);

    if (totalMonthly > 20000) {
        $('#total').css({
            'background-color': 'red',
            'color': 'white'
        })
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