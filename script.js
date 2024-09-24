document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    addUser();
});

let users = [];

function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const user = { name, email };
    users.push(user);
    renderTable();
    clearForm();
}

function renderTable() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    users.forEach((user, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="edit" onclick="editUser(${index})">Editar</button><br><br>
                <button class="delete" onclick="deleteUser(${index})">Excluir</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}

function editUser(index) {
    const user = users[index];
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;

    deleteUser(index);
}

function deleteUser(index) {
    users.splice(index, 1);
    renderTable();
}
