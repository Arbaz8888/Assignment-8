document.addEventListener('DOMContentLoaded', function () {
    const employeeForm = document.getElementById('employee-form');
    const nameInput = document.getElementById('name');
    const titleInput = document.getElementById('title');
    const extensionInput = document.getElementById('extension');
    const employeeList = document.getElementById('employee-list');
    const errorMessage = document.getElementById('error-message');
    const employeeCount = document.getElementById('employee-count');

    const employees = [
        ["Samih", "Real Estate", "123"],
        ["Vineeta", "Sales", "456"],
        ["Kaustubh", "Clerk", "789"],
        ["Adhoksh", "Business", "258"],
        ["Apoorv", "Marketing", "852"]
    ];

    updateEmployeeTable();

    employeeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = nameInput.value;
        const title = titleInput.value;
        const extension = extensionInput.value;

        if (!name || !title || !extension) {
            errorMessage.textContent = 'Please fill in all fields.';
            return;
        }

        employees.push([name, title, extension]);
        updateEmployeeTable();
        clearInputs();
    });

    function updateEmployeeTable() {
        employeeList.innerHTML = '';
        employees.forEach(function (employee, index) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td class="button_cell"><button onclick="deleteEmployee(${index})">Delete</button></td>
            `;
            employeeList.appendChild(row);
        });
        errorMessage.textContent = '';
        employeeCount.textContent = `Showing ${employees.length} Employees`;
    }

    function clearInputs() {
        nameInput.value = '';
        titleInput.value = '';
        extensionInput.value = '';
    }

    window.deleteEmployee = function (index) {
        employees.splice(index, 1);
        updateEmployeeTable();
    };
});
