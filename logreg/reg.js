let login = document.querySelector('.loginn');
let password = document.querySelector('.password');
let executorCheckbox = document.getElementById('executorCheckbox');
let customerCheckbox = document.getElementById('customerCheckbox');
let LogBtn = document.querySelector('.LogBtn');
let RegBtn = document.querySelector('.RegBtn');

let users = JSON.parse(localStorage.getItem('users')) || {};

class User {
    constructor(login, password, isExecutor, isCustomer) {
        this.login = login;
        this.password = password;
        this.isExecutor = isExecutor;
        this.isCustomer = isCustomer;
    }
}

function createID(users) {
    return Object.keys(users).length;
}

RegBtn.addEventListener('click', () => {
    const loginUser = login.value;
    const passwordUser = password.value;
    const isExecutorChecked = executorCheckbox.checked;
    const isCustomerChecked = customerCheckbox.checked;

    if (loginUser === '' || passwordUser === '') {
        alert('Все поля должны быть заполнены');
    } else if (!isExecutorChecked && !isCustomerChecked) {
        alert('Выберите "Я исполнитель" или "Я заказчик"');
    } else {
        // Check if both checkboxes are not checked at the same time
        if (isExecutorChecked && isCustomerChecked) {
            alert('Выберите только одну опцию: "Я исполнитель" или "Я заказчик"');
            return;
        }

        const user = new User(loginUser, passwordUser, isExecutorChecked, isCustomerChecked);

        const userID = 'User' + createID(users);
        users[userID] = user;

        localStorage.setItem('users', JSON.stringify(users));

        console.log(users);

        window.location.href = 'login.html';
    }
});

LogBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});
